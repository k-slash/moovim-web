// Controller
app.user.controller('SigninController', ['$scope', '$auth', '$alert', function ($scope, $auth, $alert) {

    $scope.authenticate = function (provider) {
        $auth.authenticate(provider).then(function (request) {
            // console.log('authenticated!');
        }).catch(function(response) {
            $alert({
                type: 'danger',
                content: response.data.message
            });
        });
    };

}]);
