angular.module('myApp.controllers', [])
.controller('MainController', ['$scope', '$http', 'redditRequest', function($scope, $http, redditRequest){
  $scope.redditStuff = redditRequest.async();



  // console.log($scope.redditStuff) 
  // console.log(redditRequest.async());
  // $http({
  //   method: 'JSONP',
  //   url: 'http://www.reddit.com/r/controversial.json?jsonp=JSON_CALLBACK'
  // }).success(function(data, status, headers, config) {
  //   $scope.redditStuff = data.data.children;
  // }); 
}]).controller('PostController', ['$scope', function($scope){
  $scope.votes = 0;
  $scope.downvote = function(){
    $scope.votes--;
  };
  $scope.upvote = function(){
    $scope.votes++;
  };
}]).controller('AltController', ['$scope', function($scope){
  $scope.votes = 0;
  $scope.downvote = function(){
    $scope.votes--;
  };
  $scope.upvote = function(){
    $scope.votes++;
  };
}]);

