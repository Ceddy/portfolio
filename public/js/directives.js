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
			var half = $('#eye-half');
			var full = $('#eye-mid');
			var line = $('#index-icon-line');
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
				console.log(scrollTop);
				icon.css('opacity', (400 - scrollTop) / 400);

				// logo: opacity from 1 to 0, 180 to 475
				// logo.css('opacity', (475 - scrollTop) / 295);

				// POINT OF NO RETURN!!!
				if (scrollTop >= 350) {
					// menu.css('opacity', (scrollTop - 300) / 150);
					// add visible class
					menu.css('visibility', 'visible');
					menu.removeClass('hidden-home');
				}
			})
		}
	}).
	directive('hiddenHome', function() {
		return function(scope, element, attrs) {
			var menu = $('#main-navigation');			
			// add invisible class
			menu.css('visibility', 'hidden');
			menu.addClass('hidden-home');
		}
	}).
	directive('resetContent', function() {
		return function(scope, element, attrs) {
			var menu = $('#main-navigation');
			// menu.css('visibility', 'visible');
			// add visible class
			// menu.css('opacity', 1.0);
			menu.removeClass('hidden-home');
		}
	});