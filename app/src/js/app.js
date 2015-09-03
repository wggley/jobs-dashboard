/* Main App */
google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['crossOverApp']);
});
google.load('visualization', '1', {
    packages: ['corechart']
});

var app = angular.module('crossOverApp', ['ngAnimate', 'ngRoute']);