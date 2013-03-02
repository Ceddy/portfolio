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
			var icon = element[0];
			var windowElement = angular.element($window);
			windowElement.bind('scroll', function() {
				var scrollTop = windowElement[0].scrollY;
				var scrollTarget = document.getElementById('main-navigation');
				
				// icon opacity
				scope.$apply(function() {
					// store scroll
					scope['scroll'] = scrollTop;

					// icon opacity
					icon.style['opacity'] = (350 - scrollTop) / 350;
				});
			})
		}
	}).
	directive('eatClick', function() {
		return function(scope, element, attrs) {
			$(element).click(function(event) {
				event.preventDefault();
			});
		}
	}); 

// this removes scrolling entirely... quite annoying