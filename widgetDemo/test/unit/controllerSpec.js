'use strict';

/* jasmine specs for controllers go here */
describe('Camera controllers', function() {

	beforeEach(function(){
	    this.addMatchers({
	      toEqualData: function(expected) {
	        return angular.equals(this.actual, expected);
	      }
	    });
	  });

	  beforeEach(module('cameraApp'));
	  beforeEach(module('cameraServices'));


	  describe('CameraListCtrl', function(){
	    var scope, ctrl, $httpBackend;

	    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
	      $httpBackend = _$httpBackend_;
	      $httpBackend.expectGET('json/cctv_config.json').
	          respond([{name: 'Fixed Camera Mock'}, {name: 'PTZ Camera Mock'}]);

	      scope = $rootScope.$new();
	      ctrl = $controller('CameraListCtrl', {$scope: scope});
	    }));


	    it('should create "Cameras" model with 2 cameras fetched from json file', function() {
	      expect(scope.cameras).toEqualData([]);
	      $httpBackend.flush();

	      expect(scope.cameras).toEqualData(
	          [{name: 'Fixed Camera Mock'}, {name: 'PTZ Camera Mock'}]);
	    });

	  });
	  
	  describe('CameraCreateCtrl', function(){
		 var scope, ctrl;
		 
		 beforeEach(inject(function($controller, $rootScope){
			 scope =  $rootScope.$new();
			 ctrl = $controller('CameraCreateCtrl', {$scope: scope});
		 }));
		 
		 it("Adds a new camera property by extending the length of camera.properties", function(){
			scope.camera.properties = [{'name':'', "value": ""}];
			var beforePropLength = scope.camera.properties.length;
			scope.addNewProperty();
			expect(scope.camera.properties.length).toBeGreaterThan(beforePropLength);
		 });
		 
		 it("Removes a new camera property by finding a matching property and removing it", function(){
			 scope.camera.properties = [{'name': "test1", 'value': 'value1'}];
			 var beforePropLength = scope.camera.properties.length;
			 scope.removeProperty(scope.camera.properties[0]);
			 expect(scope.camera.properties.length).toEqual(0);
		 });
	  });
})