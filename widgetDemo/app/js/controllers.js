
'use strict';

/* Controllers */

var cameraControllers = angular.module('operatorControllers', []);

/*
 * Controller that contains the scope and variables to be displayed
 * on the Camera List page
 */
cameraControllers.controller('CameraWidgetCtrl', ['$scope','$compile',  function($scope, $compile){
	var el1 = $compile("<msgs></msgs>")($scope);
	var el2 = $compile("<camera-widget></camera-widget>")($scope);
	var el3 = $compile("<camera-edit-widget></camera-edit-widget>")($scope);
	var el4 = $compile("<chart-widget></chart-widget>")($scope);

	angular.element(document.getElementById('page-article')).append(el1);
	angular.element(document.getElementById('page-article')).append(el2);
	angular.element(document.getElementById('page-article')).append(el3);
	angular.element(document.getElementById('page-article')).append(el4);
}]);
