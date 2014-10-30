// Controller
app.movie.controller('IndexController', ['$scope', 'MovieService', function ($scope, MovieService) {
    MovieService.getMoviesComingSoon().then(function (request) {
        $scope.movie = request.data;
        console.log(request.data);
    }, function(msg) {
        console.log(msg);
    });

    $scope.start = function() {
        cfpLoadingBar.start();
    };

    $scope.complete = function () {
        cfpLoadingBar.complete();
    };





}]);
