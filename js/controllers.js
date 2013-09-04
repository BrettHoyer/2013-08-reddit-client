angular.module('myApp.controllers', [])
.controller('MainController', ['$scope', '$http', function($scope, $http){
  $scope.name = "Brett";
  $http({
    method: 'JSONP',
    url: 'http://www.reddit.com/r/controversial.json?jsonp=JSON_CALLBACK'
  }).success(function(data, status, headers, config) {
    $scope.redditStuff = data.data.children;
  });
}]);

