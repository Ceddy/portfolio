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
				
				// icon opacity
				scope.$apply(function() {
					// store scroll
					scope['scroll'] = scrollTop;

					// icon opacity
					icon.css('opacity', (350 - scrollTop) / 350);

					if (!scope.locked) {
						if (scrollTop >= 450 && scrollTop <= 500) {
							menu.removeClass('nav-hide');
						} else if (scrollTop < 450) {
							menu.addClass('nav-hide');
						}

						menu.css('opacity', (scrollTop - 500) / 150);
					}

					// (ng-class="{'nav-hide': scroll <= 650, 'nav-show': scroll > 650}") 
				});
			})
		}
	}).
	directive('eatClick', function() {
		return function(scope, element, attrs) {
			$(element).click(function(event) {
				event.preventDefault();

				if (!scope.locked) {
					scope.holder = $('#main-graphic');
					scope.locked = true;
					$('#main-graphic').remove();
				}
			});
		}
	}).
	directive('pooClick', function() {
		return function(scope, element, attrs) {
			$(element).click(function(event) {
				event.preventDefault();

				// add that graphic back! and clear the holder
				$('#main-navigation').before(scope.holder);
				$('#main-navigation').addClass('nav-hide');
				scope.holder = null;
				scope.locked = false;
			});
		}
	}); 

// this removes scrolling entirely... quite annoying