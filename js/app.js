angular.module('myApp', ['ngRoute', 'myApp.controllers'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainController',
    templateUrl: '/templates/home.html'
  }).when('/alt', {
    controller: 'AltController',
    templateUrl: '/templates/doug.html'
  }).otherwise({redirectTo: '/hello'});
}]);