'use strict';

/* Services */

var operatorServices = angular.module('operatorServices', ['ngResource']);

/*
 * This services is used to get the RESTful web service
 * Should be called within the controller
 */
operatorServices.factory('Camera', ['$resource',
  function($resource){
    return $resource('http://localhost:8080/media-bridgette/VAOService/locators/:id', {}, {
      query: {method:'GET', params:{id:''}, isArray:true},
      update: {method: 'PUT'},
    });
  }]);

operatorServices.factory('Config', ['$resource',
  function($resource){
    return $resource('json/config.json:id', {}, {
      query: {method:'GET', params:{id:''}, isArray:true},
      update: {method: 'PUT'},
    });
  }]);
  
operatorServices.service('popupService', ['$window', function($window){
	this.showPopup=function(message){
        return $window.confirm(message);
    }
}]);

operatorServices.service('widgetService', [function(){
	this.config;
	this.directives = [];
	this.setConfig = function(object) {
		console.log(operatorDirectives._invokeQueue)
		for(var i=0; i < operatorDirectives._invokeQueue.length; i++)
		{
			this.directives.push(operatorDirectives._invokeQueue[i][2][0])
		}
		this.config = object;
	};
	this.getConfig = function(){
		return this.config;
	}
	this.getDirectives = function(){
		return this.directives;
	}
	
}]);

operatorServices.service('sendMsg',[function(){
	this.message= function(error){
		if (error == null) {
			return {
				msgType: -1,
				msg: ""
			};
		} 
		else if(error){
			return {
				msgType: 1,
				msg: "Error saving item"
			};
		}
		else {
			return {
				msgType: 0,
				msg: "Item saved successfully"
			};
			
		}
	}
}]);
