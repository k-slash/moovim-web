// Controller
app.article.controller('ArticleController', ['$rootScope', '$scope', 'ArticleService', '$routeParams', '$location', 'dateFilter', function ($rootScope, $scope, ArticleService, $routeParams, $location, dateFilter) {

    $rootScope.view_name = 'article';

    // Get one article
    ArticleService.getArticle($routeParams.id).then(function (article) {
        $scope.article = article;
    }, function (msg) {
        $location.path('/');
    });

    $scope.edited_comment = null;
    $scope.new_comment = {};

    // Add a new comment
    $scope.addComment = function () {
        if ($scope.edited_comment !== null) {
            $scope.updateComment();
        } else {
            // Push a new comment
            $scope.article.comments.push({
                author: $scope.new_comment.author,
                date: dateFilter(new Date(), 'yyyy-mm-dd'),
                content: $scope.new_comment.content
            });
        }

        // Reset fields
        $scope.new_comment = {};
    };

    // Edit a comment
    $scope.editComment = function (key) {
        $scope.edited_comment = key;

        $scope.new_comment.author  = $scope.article.comments[key].author;
        $scope.new_comment.content = $scope.article.comments[key].content;

        angular.element('input[name="author"]').focus();
    };

    // Edit a comment
    $scope.updateComment = function () {
        if ($scope.edited_comment !== null) {
            // Update comment
            $scope.article.comments[$scope.edited_comment].author  = $scope.new_comment.author;
            $scope.article.comments[$scope.edited_comment].content = $scope.new_comment.content;

            $scope.edited_comment = null;
        }
    };

    // Remove a comment
    $scope.removeComment = function (key) {
        if (confirm('Are you sure you want to remove the comment from '+ $scope.article.comments[key].author +'?')) {
            $scope.article.comments.splice(key, 1);

            $scope.edited_comment = null;
        }
    };

}]);
