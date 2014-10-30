// Service
app.main.service('UserService', ['$http', '$q', 'config', '$auth', function ($http, $q, config, $auth) {

    var uri = config.api.endpoint +'user';

    // console.log($auth.isAuthenticated());

    // Get user picture
    /*this.getUserPicture = function () {
        return $http.get('https://www.googleapis.com/plus/v1/people/1gf8i8339ivl1c?fields=image&key=AIzaSyD_OF_T3joHbil-fc-1Qz6SYeAqteNfijI');
    };*/

    // Get all users
    this.getUsers = function () {
        return $http.get(uri);
    };

    // Get current user
    this.getCurrentUser = function () {
        return $http.get(uri +'/me');
    };

    // Get one user
    this.getUser = function (id) {
        return $http.get(uri +'/'+ id);
    };

}]);
