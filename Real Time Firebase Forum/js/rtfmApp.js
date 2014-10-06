var app = angular.module('rtfmApp',['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/login', {
  	templateUrl: 'login/loginView.html',
    controller: 'loginCtrl'
  }).when('/threads', {
  	templateUrl: 'threads/threadsView.html',
      controller: 'threadsCtrl',
      resolve: {
        threadsRef: function(threadsService) {
          return threadsService.getThreads();
        }
      }

  }).when('/thread/:threadId', {
    templateUrl: 'thread/threadView.html',
    controller: 'threadCtrl',
    resolve: {
      threadsRef: function(threadsService, $route) {
        return threadsService.getThread($route.current.params.threadId);
      }
    }
  }).when('/thread', {
    templateUrl: 'thread/threadView.html',
    controller: 'threadCtrl',
    resolve: {
      threadRef: function (threadsService, $route) {
        return threadsService.getThread($route.current.params.threadId);
      },
      commentsRef: function (threadsService, $route) {
        return threadsService.getComments($route.current.params.threadId);
      }
    }
  }).otherwise({  //this doesn't take a '/' its just an object
  	redirectTo:'/login'
  });   

}]);

app.run(function($rootScope, $location, environmentService){
  $rootScope.$on('$routeChangeStart', function(event, next, current){ //these parameters are taking in the root scope, the location, and the enviroment service- the root scope is the event- and we've picked the routechangestart as the event to watch with the $on, the location the place to go next and environment service determining the current location based on whether it can get username I believe
    
    if(environmentService.getUsername === null){ //if this is truthy
      $location.path('/login');
    } else {
      $rootScope.username = environmentService.getUsername(); //replaced environmentService with current to see if it would get passed through
    }
  })
}); //I'm still not positive this is all this .run needs- read a number of articles and I kind of know the goal
//end page   This isn't working . . . if I remove the () on getUsername it will move forward