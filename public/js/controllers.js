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
}

// function MyCtrl1() {}
// MyCtrl1.$inject = [];

// function MyCtrl2() {
// }
// MyCtrl2.$inject = [];

function aboutCtrl($location, $anchorScroll) {
	$location.hash('main-navigation');
	$anchorScroll();
}

function projectsCtrl($location, $anchorScroll) {
	$location.hash('main-navigation');
	$anchorScroll();
}

function contactCtrl($location, $anchorScroll) {	
	$location.hash('main-navigation');
	$anchorScroll();
}

function resumeCtrl($location, $anchorScroll) {
	$location.hash('main-navigation');
	$anchorScroll();
}