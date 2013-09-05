angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives', 'myApp.services'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainController',
    templateUrl: '/templates/home.html'
  }).when('/alt', {
    controller: 'AltController',
    templateUrl: '/templates/doug.html'
  }).otherwise({redirectTo: '/hello'});
}]);