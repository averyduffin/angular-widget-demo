'use strict';

/* App Module
 * Containst the routes and lists the dependancies for the app
 *  */

var cameraApp = angular.module('operatorApp', [
  'ngRoute',
  'operatorControllers',
  'operatorFilters',
  'operatorServices',
  'operatorDirectives',
  'n3-line-chart'
]);

cameraApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/', {
		  templateUrl: 'partials/camera-widget.html',
		  controller: 'CameraWidgetCtrl'
	  }).
	  otherwise({
		  redirectTo: '/'
	  });

  }]);
