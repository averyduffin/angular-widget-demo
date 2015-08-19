'use strict';

/* Filters- this is a place to create custom filters*/

var cameraFilters = angular.module('operatorFilters', []);

cameraFilters.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

cameraFilters.filter('iif', function () {
	   return function(input, trueValue, falseValue) {
	        return input ? trueValue : falseValue;
	   };
});