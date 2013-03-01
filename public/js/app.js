'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    	when('/about', {
    		templateUrl: 'partials/about', 
    		controller: aboutCtrl
    	}).
    	when('/projects', {
    		templateUrl: 'partials/projects', 
    		controller: projectsCtrl
    	}).
    	when('/contact', {
    		templateUrl: 'partials/contact', 
    		controller: contactCtrl
    	}).
    	when('/resume', {
    		templateUrl: 'partials/resume', 
    		controller: resumeCtrl
    	}).
    	otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);