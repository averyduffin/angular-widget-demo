
'use strict';

/* Controllers */

var cameraControllers = angular.module('operatorControllers', []);
/*
 * Controller that contains the scope and variables to be displayed
 * on the Camera List page
 */
cameraControllers.controller('CameraWidgetCtrl', ['$scope','$compile', '$http', 'widgetService',function($scope, $compile, $http, widgetService){
	
	$http.get('json/config.json').success(function(data) {
	  $scope.config = data;
	});

	$scope.value = "TEST NAME"

}]);
