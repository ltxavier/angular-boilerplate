(function () {
    "use strict";

    angular.module("app.directives")
        .directive('directiveMenu', function () {
            return {
                templateUrl: "dist/templates/directives/dx-menu.html",
                link :function ($scope) {
                    $scope.Title = "Teste";
                }
            };
        });
})();