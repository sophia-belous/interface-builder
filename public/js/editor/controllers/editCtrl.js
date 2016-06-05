(function () {
    'use strict';
    angular.module('editor').controller('EditController', EditController);

    function EditController($scope, $http) {
        $scope.lists = {};
        $scope.changeSettingsOfTemplate = changeSettingsOfTemplate;
        // $scope.sizeOfColumns = '6 6';
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
        });
        // $scope.$watch('lists.dropzones', function (model) {
        //     $scope.modelAsJson = angular.toJson(model, true);
        // }, true);
        
        
        // $scope.$watch('lists.templates', function (templates) {
        //     console.log(templates)
        // }, true);
        
        function changeSettingsOfTemplate() {
            
        }
    }
})();