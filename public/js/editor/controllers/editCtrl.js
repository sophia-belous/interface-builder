(function () {
    'use strict';
    angular.module('editor').controller('EditController', EditController);

    function EditController($scope, $http) {
        $scope.lists = [];
        $http.get('./data/lists.json').success(function (data) {
            $scope.lists = data;
        });
        $scope.$watch('lists.dropzones', function (model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);
    }
})();