(function() {
	'use strict';
	angular.module('page').factory('Page', Page);
	
	function Page(ConfiguredRestangular) {
		var Pages = ConfiguredRestangular.all('pages');
		
		return {
			getAll: getAll
		};
		
		function getAll() {
			return Pages.getList();
		}		
	}
})();