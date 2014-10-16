// Service
app.main.service('GalleryService', ['$http', '$q', 'config', function ($http, $q, config) {

    var uri = config.api.endpoint +'gallery';

    // console.log($auth.isAuthenticated());

    // Get all movies
    this.getGallery = function () {
        return $http.get(uri);
    };

    // Get movies coming soon
    this.getMoviesComingSoon = function () {
        return $http.get(uri +'/soon');
    };

    // Get one movie
    this.getMovie = function (id) {
        return $http.get(uri +'/'+ id);
    };

}]);
