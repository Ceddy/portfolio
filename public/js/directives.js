'use strict';

/* Directives */

angular.module('myApp.directives', []).
	directive('appVersion', ['version', function(version) {
    	return function(scope, element, attrs) {
    		element.text(version);
    	};
  	}]);

angular.module('myApp.directives', []).value('$anchorScroll', angular.noop)

// icon disappear on window position 320
angular.module('myApp.directives', []).
	directive('iconScrolled', function($window) {
		return function(scope, element, attrs) {
			var icon = $('#index-icon');
			var windowElement = angular.element($window);
			windowElement.on('scroll', function() {
				var scrollTop = windowElement.scrollTop();
				
				// icon opacity
				scope.$apply(function() {
					// store scroll
					scope['scroll'] = scrollTop;

					// icon opacity
					icon.css('opacity', (350 - scrollTop) / 350);
				});
			})
		}
	// }).
	// directive('eatClick', function() {
	// 	return function(scope, element, attrs) {
	// 		$(element).click(function(event) {
	// 			event.preventDefault();

	// 			if (scope.holder == null) {
	// 				scope.holder = $('#main-graphic');
	// 				$('#main-graphic').remove();
	// 			}
	// 		});
	// 	}
	// }).
	// directive('pooClick', function() {
	// 	return function(scope, element, attrs) {
	// 		$(element).click(function(event) {
	// 			event.preventDefault();

	// 			// add that graphic back! and clear the holder
	// 			$('#main-navigation').before(scope.holder);
	// 			scope.holder = null;
	// 		});
	// 	}
	}); 

// this removes scrolling entirely... quite annoying