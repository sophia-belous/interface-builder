(function() {
	'use strict';
	angular.module('page').controller('PageController', PageController);
	
	function PageController($scope, Page) {
		 $scope.testline = 'Pages'
		
		$scope.pages = [];

		Page.getAll().then(function(pages) {
			$scope.pages = pages.plain();
		});        
	}
})();