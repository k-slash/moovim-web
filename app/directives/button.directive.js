app.main.directive('ngButton', function () {
    return {
        scope: {
            icon: '@icon',
            text: '@text'
        },
        restrict: 'E',
        templateUrl: './app/directives/partials/button.html'
    };
});
