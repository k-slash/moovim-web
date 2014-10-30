// Controller
app.movie.controller('DetailsController', ['$scope', '$routeParams', 'MovieService', function ($scope, $routeParams, MovieService) {
    MovieService.getMovie($routeParams.id).then(function (request) {
        $scope.movie = request.data;
        $scope.theBestVideo = 'sMKoNBRZM1M';
        //$scope.code = $scope.movie.results[0].key;
        console.log(request.data);
    }, function(msg) {
        console.log(msg);
    });
    /*alert(movieDetail);
    $scope.movie = movieDetail;*/



}]);