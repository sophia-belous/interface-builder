(function () {
    'use strict';
    angular.module('editor').controller('EditController', EditController);

    function EditController($scope, $http, DomSrvc, $state) {
        $scope.currentState = 'Edit';
        $scope.lists = {};
        var dropzoneId;
        $scope.columnPattern = (function() {
            return {
                test: function(value) {
                    if( $scope.requireColumn === false ) return true;
                    var numArray = value.split(' ').map((num) => +num);
                    var sum = numArray
                        .reduce((previousValue, currentValue) => previousValue + currentValue);
                    
                    if (sum === 12) {
                        $scope.lists.templates.map((template) => {
                            console.log(template)
                            if (template.class) {
                                template.class.name = [];
                                template.class.columns = [];
                                numArray.map((number) => {
                                    var classObj = $scope.lists.classes[number - 1];
                                    template.class.name.push(classObj.name);
                                    template.class.columns.push([]);
                                });
                            }
                        }) 
                        return true;
                    }
                    else return false;
                }
            };
        })();
        
        $http.get('./data/lists.json').success((data) => {
            $scope.lists = data;
            
            DomSrvc.getDom().then(function(model) {
                var obj = model.plain();
                dropzoneId = obj[0]._id;
                $scope.lists.dropzones = obj[0].dropzone;
            });
        });
        
        
        $scope.$watch('lists.dropzones', function (model) {
            $scope.modelAsJson = angular.toJson(model, true);
            $scope.model = model;
            if(dropzoneId)
                DomSrvc.updateDom(dropzoneId, $scope.model);
        }, true);
        
        
        
        // $scope.$on('$destroy', function() {
        //     DomSrvc.updateDom(dropzoneId, $scope.model);
        // })
    }
})();