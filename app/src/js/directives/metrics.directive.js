app.directive('metrics', function(){
	// Runs during compile
	return {
		// name: 'Metrics Directive',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		templateUrl: "views/directives/metrics.view.html",
		restrict: "E",
		scope: {
			title: '=',
			status: '=',
			data: '='
		},
		controller: ['$scope', function($scope) {
			$scope.checkMetricsStatus = function(metric_value) {
		      if (metric_value < 50) {
		        return "arrow_red_down";
		      }
		      if (metric_value < 100) {
		        return "arrow_yellow_right";
		      }
		      if (metric_value == 100) {
		        return "arrow_green_up";
		      }
		    }
		}]
	};
});