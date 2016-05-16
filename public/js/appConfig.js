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
                .state('editor', {
                    url: '/edit',
                    templateUrl: 'views/editor/edit-page.html',
                    controller: 'EditController'
                });
        $locationProvider.html5Mode(true);       
	}
})();