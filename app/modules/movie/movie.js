app.movie = angular.module('MoovIm.Movie', ['ngRoute', 'oc.lazyLoad', 'MoovIm.Config']);

app.movie.config(['$routeProvider', '$authProvider', 'config', function ($routeProvider, $authProvider, config) {

    var routes = {
        '/movie': {
            templateUrl: 'app/modules/movie/views/index.html',
            controller: 'IndexController',
            page: {
                title: 'Movie list',
                name: 'movie',
                require_auth: false
            },
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MoovIm.Movie',
                        files: [
                            'app/modules/movie/controllers/index.controller.js'
                        ]
                    }, {
                        name: 'MoovIm',
                        files: [
                            'app/services/movie.service.js'
                        ]
                    }]);
                }]
            }
        },
        '/movie/create': {
            templateUrl: 'app/modules/movie/views/form.html',
            controller: 'FormController',
            page: {
                title: 'Create a movie',
                name: 'movie_create',
                require_auth: true
            },
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MoovIm.Movie',
                        files: [
                            'app/modules/movie/controllers/form.controller.js'
                        ]
                    }, {
                        name: 'MoovIm',
                        files: [
                            'app/services/movie.service.js'
                        ]
                    }]);
                }]
            }
        },
        '/movie/edit/:id': {
            templateUrl: 'app/modules/movie/views/form.html',
            controller: 'FormController',
            page: {
                title: 'Edit a movie',
                name: 'movie_edit',
                require_auth: true
            },
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MoovIm.Movie',
                        files: [
                            'app/modules/movie/controllers/form.controller.js'
                        ]
                    }, {
                        name: 'MoovIm',
                        files: [
                            'app/services/movie.service.js'
                        ]
                    }]);
                }]
            }
        },
        '/movie/:id': {
            templateUrl: 'app/modules/movie/views/details.html',
            controller: 'DetailsController',
            page: {
                title: 'Movie details',
                name: 'movie_details',
                require_auth: true
            },
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MoovIm.Movie',
                        files: [
                            'app/modules/movie/controllers/details.controller.js'
                        ]
                    }, {
                        name: 'MoovIm',
                        files: [
                            'app/services/movie.service.js'
                        ]
                    }]);
                }]
            }
        }
    };

    for (var path in routes) {
        $routeProvider.when(path, routes[path]);
    }

}]);
