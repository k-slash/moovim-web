// Controller
app.user.controller('SignoutController', ['$auth', function ($auth) {
    $auth.logout();
}]);
