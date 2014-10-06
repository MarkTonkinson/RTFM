var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, environmentService, $location){
	$scope.env = environmentService.getEnv();

	$scope.logMeIn = function(){
		alert($scope.username);
		$location.path('/threads');//has to be assigned router path
		environmentService.saveUsername($scope.username);			
	}


});