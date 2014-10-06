var app = angular.module('rtfmApp');
'use strict';
app.controller('threadsCtrl', function($scope, threadsRef){ //do I need threadsService?  Or does it just get it through the route? threads route is getting the part of the service we want- just the getThreads
	
	$scope.threads = threadsRef.$asArray(); //does it know about threadsRef bc threadsRef is in the module?
	//to continue- the right hand side is grabbing the service.getThreads- why are we going through the router rather than injecting the threadsService directly?
	
	$scope.threads.$loaded().then(function (threads){
		console.log(threads);
	}); //The "threads" it's console logging isn't anything yet

	$scope.createThread = function(username, title){
		$scope.threads.$add({
			username: username,
			title: title
		});
	}

});