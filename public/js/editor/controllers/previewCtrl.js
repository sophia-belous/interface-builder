(function () {
    'use strict';
    angular.module('editor').controller('PreviewController', PreviewController);

    function PreviewController($scope, $http, DomSrvc, $state) {
        var dropzoneId;
        $http.get('./data/lists.json').success((data) => {
            $scope.lists = data;
            
            DomSrvc.getDom().then(function(model) {
                var obj = model.plain();
                dropzoneId = obj[0]._id;
                $scope.lists.dropzones = obj[0].dropzone;
            });
        });
        
        // DomSrvc.getDom().then(function(model) {
        //     var obj = model.plain();
        //     $scope.modelAsJson = angular.toJson(obj[0].dropzone, true);
        // });
    }
})();