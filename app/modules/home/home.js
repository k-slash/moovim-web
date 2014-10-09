app.home = angular.module('MoovIm.Home', ['ngRoute', 'oc.lazyLoad']);

app.home.config(['$routeProvider', function ($routeProvider) {

    var routes = {
        '/': {
            templateUrl: 'app/modules/home/views/home.html',
            controller: 'HomeController',
            page: {
                title: 'Home',
                name: 'home',
                require_auth: true
            },
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MoovIm.Home',
                        files: [
                            'app/modules/home/controllers/home.controller.js'
                        ]
                    });
                }]
            }
        }
    };

    for (var path in routes) {
        $routeProvider.when(path, routes[path]);
    }

}]);
