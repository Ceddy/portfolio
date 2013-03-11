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

    $scope.page = null;
    $scope.scroll = 0;
}

function homeCtrl($scope) {
  $scope.page = 'home';
}

function aboutCtrl() {
}

function projectsCtrl($scope) {
  $scope.show = function($event) {
    var src = $($event.currentTarget);
    var srcContainer = src.next();
    
    if (!srcContainer.hasClass('display-none')) {
      // visible
      src.addClass('fade');
      srcContainer.addClass('display-none');
    } else {
      // invisible
      $('.project-header').addClass('fade');
      $('.project-views').addClass('display-none');
      src.removeClass('fade');
      srcContainer.removeClass('display-none');
    }
  }
}

function contactCtrl() {	
}

function resumeCtrl() {
}