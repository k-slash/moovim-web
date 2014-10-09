// Controller
app.error.controller('MaintenanceController', ['$scope', 'config', '$location', function ($scope, config, $location) {

    // Maintenance mode
    if (config.project.maintenance === false) {
        $location.path('/');
    }

}]);
