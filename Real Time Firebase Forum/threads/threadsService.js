var app = angular.module('rtfmApp');

app.service('threadsService', function(environmentService, $firebase){
	var firebaseUrl = environmentService.getEnv().firebase; //why the .firebase on the end? It is grabbing the environmentService window.env- which is an object that has the environment and the firebase property on it in the environment.js file.  We are grabbing the firebase property which is a url

	return {  //should this technically be going in a factory?
		getThreads: function(){
			return $firebase(new Firebase(firebaseUrl + '/threads'));
		},

		getThread: function(threadId) {
			return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
		},
		getComments: function(threadId) {
			return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId + '/comments'));
		}
	} //where is it going to get the threadId- I know this is similar to NBAroutes, but I didn't really get that . . .

});