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
  	$scope.holder = null;
  	$scope.locked = false;
}

// function MyCtrl1() {}
// MyCtrl1.$inject = [];

// function MyCtrl2() {}
// MyCtrl2.$inject = [];

function aboutCtrl($location, $anchorScroll) {
}

function projectsCtrl($location, $anchorScroll) {
}

function contactCtrl($location, $anchorScroll) {	
}

function resumeCtrl($location, $anchorScroll) {
}