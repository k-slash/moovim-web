var app = {};

app.main = angular.module('MoovIm', [
    // Tools
    'ngRoute',
    'oc.lazyLoad',
    'satellizer',
    'angular-loading-bar',
    'mgcrea.ngStrap',
    'ngAnimate',

    // Modules
    'MoovIm.Home',
    'MoovIm.Error',
    'MoovIm.User',
    'MoovIm.Movie'
]);

// Config
app.main.config(['$routeProvider', 'cfpLoadingBarProvider', '$alertProvider', function ($routeProvider, cfpLoadingBarProvider, $alertProvider) {

    // Default route
    $routeProvider.otherwise({
        redirectTo: '/not-found'
    });

    // Loading bar configuration
    cfpLoadingBarProvider.latencyThreshold = 0;
    cfpLoadingBarProvider.includeSpinner = false;

    // Alert configuration
    angular.extend($alertProvider.defaults, {
        title: '',
        animation: 'am-fade-and-slide-right',
        placement: 'top-right',
        duration: 5
    });

}]);

app.main.run(['$rootScope', '$location', '$auth', 'config', 'UserService', function ($rootScope, $location, $auth, config, UserService) {

    //console.log(config);

    // Init objects
    $rootScope.project = {};
    $rootScope.page = {};

    // Default values
    $rootScope.project = {
        title: config.project.title
    };

    $rootScope.page = {
        title: null,
        name: null,
        current_url: null,
        require_auth: false
    };

    // Access control
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        // console.log(current);
        // if(current !== undefined && current.hasOwnProperty('$$route')) {
        //     console.log(current.$$route.originalPath);
        // }

        // console.log(next);

        $rootScope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        // Maintenance mode
        if (config.project.maintenance === true) {
            $location.path('/maintenance');

            event.preventDefault();
        }

        if (next.page && next.page.require_auth === true) {
            // console.log('access protected');

            if ($auth.isAuthenticated() === false) {
                // console.log('you have to be logged in');
                $location.path('/sign-in');
                event.preventDefault();
            }
        }

        if ($auth.isAuthenticated() === true) {
            // console.log('user logged');
            UserService.getCurrentUser().then(function (request) {
                $rootScope.user = request.data;
            }, function(msg) {
                // console.log(msg);
            });
        } else {
            // console.log('user unlogged');
        }
    });

    // Page configuration
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    //  console.log(previous);
        if (current.page) {
            // Override
            $rootScope.page.title        = current.page.title;
            $rootScope.page.name         = current.page.name;
            $rootScope.page.require_auth = current.page.require_auth;
            $rootScope.page.current_url  = $location.absUrl();
        }
    });

}]);

