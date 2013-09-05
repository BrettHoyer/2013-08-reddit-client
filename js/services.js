angular.module('myApp.services', [])
.factory('redditRequest', ['$http', '$q', function($http, $q){
  var redditRequest = {
    async: function(){
      var deferred = $q.defer();
      $http({
        method: 'JSONP', 
        url: 'http://www.reddit.com/r/controversial.json?jsonp=JSON_CALLBACK'
      })
      .success(function(response){
        deferred.resolve(response.data.children);
      })
      .error(function(){
      });
      return deferred.promise.then(function(value){
        return value;
      });
    }
  };
  return redditRequest;
}]);
