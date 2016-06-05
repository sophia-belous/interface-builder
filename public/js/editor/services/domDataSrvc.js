(function() {
	'use strict';
	angular.module('editor').factory('DomSrvc', DomSrvc);
	
	function DomSrvc(ConfiguredRestangular) {
		var Dom = ConfiguredRestangular.one('dom');
		
		return {
			getDom: getDom,
			saveDom: saveDom,
			updateDom: updateDom
		};
		
		function getDom() {
			return Dom.get();
		}	
		
		function saveDom(domModel) {
			return Dom.post({ dropzone: domModel });
		}
		
		function updateDom(domId, domModel) {
			return ConfiguredRestangular.one('dom', domId).customPUT({ dropzone: domModel });
		}
	}
})();