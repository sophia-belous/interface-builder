(function() {
    'use strict';
    angular.module('builderApp').config(appConfig);

    function appConfig($stateProvider, $locationProvider, RestangularProvider) {
        RestangularProvider.setBaseUrl('/api');
        $stateProvider
                .state('pages', {
                    url: '/',
                    templateUrl: 'views/pages/page-list.html',
                    controller: 'PageController'
                })
                .state('edit', {
                    url: '/edit',
                    templateUrl: 'views/editor/edit.html',
                    controller: 'EditController'
                })
                .state('preview', {
                    url: '/preview',
                    templateUrl: 'views/editor/preview.html',
                    controller: 'PreviewController'
                });
        $locationProvider.html5Mode(true);
    }
})();