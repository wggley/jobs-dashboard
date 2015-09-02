angular.module('crossOverApp', [])

.controller('crossOverController', function($http, $scope) {
    var crossOver = this;
    crossOver.data = [];

    $http.get('data.json')
    .then(function(response) {
      crossOver.data = response.data;
    }, function(response) {
      console.log('DEBUG: error acessing data');
    });

    $scope.validateProcessType = function (data) {
      if (data.type == "change") {
        if (data.status == "pending") {
          return "computer_grey";
        }
        if (data.status == "complete") {
          return "computer_green";
        }
      } else if (data.type == "build") {
        if (data.status == "running") {
          return "brick_blue";
        }
        if (data.status == "accepted") {
          return "brick_green";
        }
        if (data.status == "rejected") {
          return "brick_red";
        }
      }

    }
})
.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
;