angular.module('myApp.controllers', [])
.controller('MainController', function($scope, $http){
  $scope.name = "Brett";
  $http({
    method: 'JSONP',
    url: 'http://www.reddit.com/r/controversial.json?jsonp=JSON_CALLBACK'
  }).success(function(data, status, headers, config) {
    $scope.redditStuff = data.data.children;
  });
}).controller('PostController', function($scope){
  $scope.votes = 0;
  $scope.downvote = function(){
    $scope.votes--;
  };
  $scope.upvote = function(){
    $scope.votes++;
  };
}).controller('AltController', function($scope){
  $scope.votes = 0;
  $scope.downvote = function(){
    $scope.votes--;
  };
  $scope.upvote = function(){
    $scope.votes++;
  };
});

