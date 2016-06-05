(function() {
    'use strict';
    angular.module('editor').directive('wmItem', wmItem);

    function wmItem() {
        return {
            restrict: 'E',
            templateUrl: 'views/editor/components/item.html',
            scope: false,
            replace: true
        };
    }
})();