var app = angular.module('rtfmApp');

app.service('environmentService', function environmentService($window){
	return {
		getEnv: function() {
			return $window.env;
		},
		saveUsername: function(username){
			debugger;
			$window.localStorage.setItem('username', username);	
		},
		getUsername: function(){
			return $window.localStorage.getItem('username');
		}  //the problem is this isn't getting anything from the window . .. .
	}		//it just doesn't seem to be storing

	
});