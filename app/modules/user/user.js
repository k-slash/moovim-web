app.user = angular.module('MoovIm.User', ['ngRoute', 'oc.lazyLoad', 'MoovIm.Config']);

app.user.config(['$routeProvider', '$authProvider', 'config', function ($routeProvider, $authProvider, config) {

    var routes = {
        '/sign-in': {
            templateUrl: 'app/modules/user/views/signin.html',
            controller: 'SigninController',
            page: {
                title: 'Sign-in',
                name: 'signin',
                require_auth: false
            },
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MoovIm.User',
                        files: [
                            'app/modules/user/controllers/signin.controller.js'
                        ]
                    });
                }]
            }
        },
        '/sign-out': {
            template: null,
            controller: 'SignoutController',
            page: {
                title: 'Sign-out',
                name: 'signout',
                require_auth: true
            },
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MoovIm.User',
                        files: [
                            'app/modules/user/controllers/signout.controller.js'
                        ]
                    });
                }]
            }
        }
    };

    for (var path in routes) {
        $routeProvider.when(path, routes[path]);
    }

    // OAuth provider
    $authProvider.google({
        url: config.api.endpoint +'user/auth',
        clientId: config.oauth.client_id,
        redirectUri: config.oauth.redirect_uri
    });

}]);
