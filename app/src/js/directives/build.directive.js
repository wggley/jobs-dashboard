app.directive('build', function(){
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
		templateUrl: "views/directives/build.view.html",
		restrict: "E",
		scope: {
			title: '=',
			status: '=',
			data: '=',
			date: '='
		}
	};
});