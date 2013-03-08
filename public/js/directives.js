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
			var logo = $('#index-logo');
			var menu = $('#main-navigation');
			var meteor = $('#meteor');
			var windowElement = angular.element($window);
			windowElement.on('scroll', function() {
				var scrollTop = windowElement.scrollTop();
				
				// update scroll
				scope.$apply(function() {
					scope['scroll'] = scrollTop;
				});

				// opacity stuff
				// icon opacity
				icon.css('opacity', (350 - scrollTop) / 350);
				// logo: opacity from 1 to 0, 180 to 475
				logo.css('opacity', (475 - scrollTop) / 295);

				// POINT OF NO RETURN!!!
				// if (scrollTop >= 350) {
				// 	menu.css('visibility', 'visible');
				// 	menu.css('opacity', (scrollTop - 300) / 150);
				// }
			})
		}
	}).
	directive('hiddenHome', function() {
		return function(scope, element, attrs) {
			var menu = $('#main-navigation');
			menu.css('visibility', 'hidden');
		}
	}).
	directive('resetContent', function() {
		return function(scope, element, attrs) {
			var menu = $('#main-navigation');
			menu.css('visibility', 'visible');
			menu.css('opacity', 1.0);
		}
	});