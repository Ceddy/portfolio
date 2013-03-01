'use strict';

/* Directives */


angular.module('myApp.directives', []).
	directive('appVersion', ['version', function(version) {
    	return function(scope, element, attrs) {
    		element.text(version);
    	};
  	}]);

angular.module('myApp.directives', []).
	directive('whenScrolled', function($window) {
		return function(scope, element, attrs) {
			// disappear on window position 550
			var icon = element[0];
			var windowElement = angular.element($window);
			windowElement.bind('scroll', function() {
				var scrollTop = windowElement[0].scrollY
				if (scrollTop <= 320) {
					scope.$apply(function() {
						var test = (350 - scrollTop) / 350;
						console.log(scrollTop + " opacity: " + test);
						icon.style['opacity'] = test;
					});
				};
			})
		}
	})