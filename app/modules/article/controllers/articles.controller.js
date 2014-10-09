// Controller
app.article.controller('ArticlesController', ['$rootScope', '$scope', 'ArticleService', '$auth', function ($rootScope, $scope, ArticleService, $auth) {

    $rootScope.view_name = 'articles';

    // Get all articles
    $scope.articles = ArticleService.getArticles().then(function (request) {
        $scope.articles = request.data;
    }, function (msg) {
        alert(msg);
    });

}]);
