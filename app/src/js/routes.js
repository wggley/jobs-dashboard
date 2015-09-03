app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'changesController as controller',
      templateUrl:'views/changes.view.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})