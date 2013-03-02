'use strict';

/* Directives */

angular.module('myApp.directives', []).
	directive('appVersion', ['version', function(version) {
    	return function(scope, element, attrs) {
    		element.text(version);
    	};
  	}]);

// icon disappear on window position 320
angular.module('myApp.directives', []).
	directive('iconScrolled', function($window) {
		return function(scope, element, attrs) {
			var icon = $('#index-icon');
			var menu = $('#main-navigation');
			var windowElement = angular.element($window);
			windowElement.on('scroll', function() {
				var scrollTop = windowElement.scrollTop();
				
				// store scroll
				scope['scroll'] = scrollTop;
				

				// icon opacity
				icon.css('opacity', (350 - scrollTop) / 350);

				// POINT OF NO RETURN!!!
				if (scrollTop >= 510) {
					menu.css('visibility', 'visible');
				}
			})
		}
	}).
	directive('hiddenHome', function() {
		return function(scope, element, attrs) {
			var page = scope.page;
			var menu = $('#main-navigation');
			menu.css('visibility', 'hidden');
		}
	});