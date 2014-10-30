// Service
app.main.service('MovieService', ['$http', '$q', 'config', function ($http, $q, config) {

    var uri = config.api.endpoint +'movie';

    // console.log($auth.isAuthenticated());

    // Get all movies
    this.getMovies = function () {
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
