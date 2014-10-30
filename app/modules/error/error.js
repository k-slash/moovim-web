app.error = angular.module('MoovIm.Error', ['ngRoute', 'oc.lazyLoad']);

app.error.config(['$routeProvider', function ($routeProvider) {

    var routes = {
        '/not-found': {
            templateUrl: 'app/modules/error/views/not_found.html',
            controller: 'NotFoundController',
            page: {
                title: '404 Not found',
                name: 'notfound',
                require_auth: false
            },
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MoovIm.Error',
                        files: [
                            'app/modules/error/controllers/not_found.controller.js'
                        ]
                    });
                }]
            }
        },
        '/maintenance': {
            templateUrl: 'app/modules/error/views/maintenance.html',
            controller: 'MaintenanceController',
            page: {
                title: 'Maintenance',
                name: 'maintenance',
                require_auth: false
            },
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MoovIm.Error',
                        files: [
                            'app/modules/error/controllers/maintenance.controller.js'
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
