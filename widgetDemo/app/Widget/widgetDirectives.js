'use strict';

/* Directives - are used to create custom html tags */


var operatorDirectives = angular.module('operatorDirectives', []);

//=====================================Widget Manager============================================
//Widget Manager used to sort and evaluate widgets
operatorDirectives.directive('widgetManager', ['$compile', function($compile){
	//---------------Place widget directive templates here------------------------------ 
	var rectTextButton = '<rect-text-button base button-text="val" config="widget"></rect-text-button>';
	var roundTextButton = '<round-text-button base button-text="val" config="widget"></round-text-button>';
	var greyPanel = '<grey-panel base button-text="val" config="widget"></grey-panel>';
	var title = '<title-widget base config="widget"></title-widget>';
	var cardPanel = '<card-panel base config="widget"></card-panel>';
	var cameraEditFormWidget = '<camera-edit-form-widget base config="widget"></camera-edit-form-widget>';
	var submitButton = '<submit-button base config="widget"></submit-button>';
	var textInput = '<text-input base config="widget" model="val"></text-input>';
	var textArea = '<text-area base config="widget" model="val"></text-area>';
	var cameraWidgetView = '<camera-widget-view base config="widget"></camera-widget-view>';
	
	var widgets = {
		"rectTextButton": rectTextButton,
		"roundTextButton": roundTextButton,
		"greyPanel": greyPanel,
		"title": title,
		"cardPanel": cardPanel,
		"cameraEditFormWidget": cameraEditFormWidget,
		"submitButton": submitButton,
		"textInput": textInput,
		"textArea": textArea,
		"cameraWidgetView": cameraWidgetView
	};
	
	var getTemplate = function(widgetName){
		return widgets[widgetName];
	}
	var linker = function(scope, element, attrs) {
        element.html(getTemplate(scope.widget.id));
        $compile(element.contents())(scope);
    }

    return {
        restrict: "E",
		scope: {
			val: '=',
            widget:'='
        },
        link: linker
        
    };
}]);

//========================================Widget Parent Directives============================
//Parent Directive. Common functions for Widgets
operatorDirectives.directive('base', function(){
	return {
		scope: false,
		controller: function($element, $scope) {
			this.setColor = function(color){
				$element.css("background-color", color);
			}
			this.setWidth = function(width){
				$element.css("width", width);
			}
			this.setHeight = function(height){
				$element.css("height", height);
			}
			this.setPositionX = function(x){
				$element.css("left", x);
			}
			this.setPositionY = function(y){
				$element.css("top", y);
				
			}
			this.setIcon = function(icon){
				console.log(icon);
				
			}
			this.writeConsole = function(){
				console.log($scope);
			}
		}
	}
});

//==============================WIDGETS================================================
operatorDirectives.directive('greyPanel', function(){
	return{
		restrict: 'E',
        replace: true,
        scope: {
            buttonText: '=',
			config: '=',
			widgetList: '='
        },
        require: '^base',
        template: '<div class=""><widget-manager val="name"" ng-repeat="item in widgetList" widget="item" ></widget-manager></div>',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;
			scope.widgetList = scope.config.widgetList;
			scope.base.setColor(scope.config.color);
        }
	}
});

operatorDirectives.directive('cardPanel', function(){
	return{
		restrict: 'E',
        replace: true,
        scope: {
            text: '=',
			config: '=',
			widgetList: '='
        },
        require: '^base',
        template: '<div class="list-space widget-card"><div class="camera-list row"><div class="camera-box"><widget-manager val="name"" ng-repeat="item in widgetList" widget="item"></widget-manager></div></div></div>',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;
			scope.widgetList = scope.config.widgetList;
			scope.base.setColor(scope.config.color);
			scope.base.setWidth(scope.config.width);
			//scope.base.setHeight(scope.config.height);
			//scope.base.setPositionX(scope.config.relativePosition.x);
			//scope.base.setPositionY(scope.config.relativePosition.y);	
        }
	}
});

operatorDirectives.directive('rectTextButton', function(){
	return {
		restrict: 'E',
        replace: true,
        scope: {
            buttonText: '=',
			config: '='
        },
        require: '^base',
        template: '<button class="btn btn-primary">{{config.toolName}}</button>',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;
			//scope.base.setColor(scope.config.color);
			//scope.base.setWidth(scope.config.width);
			//scope.base.setHeight(scope.config.height);
			//scope.base.setPositionX(scope.config.relativePosition.x);
			//scope.base.setPositionY(scope.config.relativePosition.y);
			
        },
	}
	
});

operatorDirectives.directive('roundTextButton', function(){
	return{
		restrict: 'E',
        replace: true,
        scope: {
            buttonText: '=',
			config: '='
        },
        require: '^base',
        template: '<button class="btn btn-primary btn-circle">{{config.toolName}}</button>',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;
			//scope.base.setColor(scope.config.color);
			//scope.base.setWidth(scope.config.width);
			//scope.base.setHeight(scope.config.height);
			//scope.base.setPositionX(scope.config.relativePosition.x);
			//scope.base.setPositionY(scope.config.relativePosition.y);
			
        },
		controller: function($scope, $element){
			$scope.setBoarderRadias = function(radius){
				$element.css("border-radius", radius);
			}
			
			$scope.setBoarderRadias($scope.config.borderRadius)
		}
	}
});



operatorDirectives.directive('titleWidget', function(){
	return{
		restrict: 'E',
        replace: true,
        scope: {
            text: '=',
			config: '='
        },
        require: '^base',
        template: '<div class=""><h1>{{config.text}}</h1><div>',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;
			scope.base.setColor(scope.config.color);
			//scope.base.setWidth(scope.config.width);
			//scope.base.setHeight(scope.config.height);
			//scope.base.setPositionX(scope.config.relativePosition.x);
			//scope.base.setPositionY(scope.config.relativePosition.y);	
        }
	}
});

operatorDirectives.directive('cameraWidgetView', function(){
	return{
		restrict: 'E',
        replace: true,
        scope: {
            text: '=',
			config: '=',
			widgetList: '='
        },
        require: '^base',
        template: '<div><widget-manager ng-repeat="item in widgetList" widget="item" val="camera[item.model]" ></widget-manager></div>',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;
			scope.widgetList = scope.config.widgetList;
        },
		controller: function($scope, $element, Camera){
			$scope.loadCamera = function() {
				$scope.camera = Camera.get({ id: "2" });
			};
			$scope.loadCamera();
		}
	}
});
//Form Widgets
operatorDirectives.directive('cameraEditFormWidget', function(){
	return{
		restrict: 'E',
        replace: true,
        scope: {
            text: '=',
			config: '=',
			widgetList: '='
        },
        require: '^base',
        templateUrl: 'Widget/widgetPartials/editForm.html',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;
			scope.widgetList = scope.config.widgetList;
        },
		controller: function($scope, $element, Camera){
			$scope.updateCamera = function() { //Update the edited Camera. Issues a PUT to /api/camera/:id
		    $scope.camera.$update(function() {
		    	$scope.loadCamera();
		    });
			};
			  
			$scope.loadCamera = function() { //Issues a GET request to /api/camera/:id to get a camera to update
				$scope.camera = Camera.get({ id: "2" });
			};
			$scope.loadCamera(); // Load a camera which can be edited on UI
			
			$scope.addNewProperty = function() {
				var newItemNo = $scope.camera.properties+1;
				$scope.camera.properties.push({'name':'', "value": ""});
			};
				
			$scope.removeProperty = function(property) {
				var index = 0;
				for(index in $scope.camera.properties){
					if($scope.camera.properties[index].name == property.name && $scope.camera.properties[index].value == property.value ){
						break;
					}
				}
				if(index > -1){
					$scope.camera.properties.splice(index, 1);
				}
			}
		}
	}
});

operatorDirectives.directive('submitButton', function(){
	return {
		restrict: 'E',
        replace: true,
        scope: {
            buttonText: '=',
			config: '='
        },
        require: '^base',
        template: '<button type="submit" class="btn btn-primary">{{config.toolName}}</button>',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;			
        },
	}
});

operatorDirectives.directive('textInput', function(){
	return {
		restrict: 'E',
        replace: true,
        scope: {
            buttonText: '=',
			config: '=',
			model: '=',
        },
        require: '^base',
        template: '<div class="col-sm-10"><input type="text" ng-model="model" class="form-control" placeholder="{{config.placeholder}}"/></div>',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;
			scope.base.writeConsole();
        },
	}
});

operatorDirectives.directive('textArea', function(){
	return {
		restrict: 'E',
        replace: true,
        scope: {
            buttonText: '=',
			config: '=',
			model: '=',
        },
        require: '^base',
        template: '<div class="col-sm-10"><span>{{model}}</span></div>',
        link: function(scope, element, attr, basectrl){
            scope.base = basectrl;
			scope.base.writeConsole();
        },
	}
});