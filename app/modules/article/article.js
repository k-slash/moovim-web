app.article = angular.module('Blog.Article', ['ngRoute', 'oc.lazyLoad']);

app.article.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/modules/article/views/articles.html',
            controller: 'ArticlesController',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Blog',
                        files: ['app/directives/button.directive.js']
                    }, {
                        name: 'Blog.Article',
                        files: [
                            'app/modules/article/controllers/articles.controller.js',
                            'app/services/article.service.js'
                        ]
                    }]);
                }]
            }
        })
        .when('/article/:id', {
            templateUrl: 'app/modules/article/views/article.html',
            controller: 'ArticleController',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'Blog.Article',
                        files: [
                            'app/modules/article/controllers/article.controller.js',
                            'app/services/article.service.js'
                        ]
                    });
                }]
            }

        });

}]);
