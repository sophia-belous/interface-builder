(function() {
    'use strict';
    angular.module('editor').directive('wmGrid', wmGrid);

    function wmGrid() {
        return {
            restrict: 'E',
            templateUrl: 'views/editor/components/grid.html',
            scope: false
        };
    }
})();