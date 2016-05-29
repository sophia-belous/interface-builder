(function() {
    'use strict';
    angular.module('editor').directive('wmList', wmList);

    function wmList() {
        return {
            restrict: 'E',
            templateUrl: 'views/editor/components/list.html',
            scope: false
        };
    }
})();