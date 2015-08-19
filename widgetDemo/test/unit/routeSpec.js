'use strict';

/* jasmine specs for controllers go here */
describe('Camera controllers', function() {

	  beforeEach(module('cameraApp'));
	  beforeEach(module('cameraServices'));


	  describe('Camera list view', function() {
	    beforeEach(function() {
	      browser.get('app/index.html/#/');
	    });
	  });
	  
	  /*describe('Camera detail view', function() {

	    beforeEach(function() {
	      browser.get('app/index.html/#/camera/nexus-s');
	    });


	    it('should display placeholder page with cameraId', function() {
	      expect(element(by.binding('cameraId')).getText()).toBe('nexus-s');
	    });
	  });*/
})