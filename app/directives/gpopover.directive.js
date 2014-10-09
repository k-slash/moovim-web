app.main.directive('gpopover', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).gpopover(scope.$eval(attrs.gpopover));
        }
    };
});
