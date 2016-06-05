(function() {
    'use strict';
    angular.module('editor').directive('wmContainer', wmContainer);

    function wmContainer() {
        return {
            restrict: 'E',
            templateUrl: 'views/editor/components/container.html',
            scope: false,
            replace: true
        };
    }
})();