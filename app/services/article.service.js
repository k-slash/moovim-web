// Service
app.article.service('ArticleService', ['$http', '$q', '$timeout', 'Blog.Config', function ($http, $q, $timeout, config) {

    console.log(config);

    // Load articles
    var articles = (function () {
        return $http.get('./app/services/articles.json');
    })();

    // Get all articles
    this.getArticles = function () {
        return articles;
    };

    // Get one article
    this.getArticle = function (id) {
        var deferred = $q.defer(),
            article = {},
            found = false,
            promise = null;
        id = parseInt(id, 10);

        // Articles promise
        promise = articles.then(function (json) {
            for (var key in json.data) {
                if (json.data[key].id === id) {
                    article = json.data[key];
                    found   = true;
                }
            }

            // Article not found
            if (found === false) {
                deferred.reject('Article not found');
            } else {
                // Article found
                deferred.resolve(article);
            }
        });

        return deferred.promise;
    };

}]);
