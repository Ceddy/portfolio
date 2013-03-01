'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
	// http request to fetch name
	$http({method: 'GET', url: '/api/name'}).
  	success(function(data, status, headers, config) {
    	$scope.name = data.name;
  	}).
  	error(function(data, status, headers, config) {
    	$scope.name = 'Error!'
  	});

  	// set up the scroll position
  	$scope.scroll = 0;

  	// Analytics code
  	$scope.$on('$viewContentLoaded', function(event) {
  		$window._gaq.push(['_trackPageview', $location.path()]);
  	})
}

// function MyCtrl1() {}
// MyCtrl1.$inject = [];

// function MyCtrl2() {
// }
// MyCtrl2.$inject = [];

function aboutCtrl($event) {
	$event.preventDefault();
}

function projectsCtrl($event) {
	$event.preventDefault();
}

function contactCtrl($event) {
	$event.preventDefault();
}

function resumeCtrl($event) {
	$event.preventDefault();
}