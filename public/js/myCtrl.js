var app = angular.module('myData');

app.controller('myCtrl', function($scope, myService){
	
	$scope.getFriend= function(){
		myService.getFriends().then(function(data) {
			$scope.info = data;
		});
		$scope.show=true;
		$scope.hide=true;
	}

	$scope.getFamily= function(){
		myService.getFamily().then(function(data) {
			$scope.info = data;
		});
		$scope.show=true;
		$scope.hide=true;
	}

	$scope.getActivities= function(){
		myService.getActivities().then(function(data) {
			$scope.hobbies = data;
		});
		$scope.show=false;
		$scope.hide=false;
	}

	$scope.getMe= function(){
		myService.getMe().then(function(data) {
			$scope.info = data;
		});
		$scope.show=true;
		$scope.hide=true;
	}

	$scope.addFriend= function(){
		myService.addFriend($scope.fname, $scope.fage, $scope.friendsince).then(function(data) {
			$scope.info = data;
		})
		$scope.show=true;
		$scope.hide=true;
	}
	$scope.addFamily= function(){
		myService.addFamily($scope.famname, $scope.famage, $scope.relation).then(function(data) {
			$scope.info = data;
		})
		$scope.show=true;
		$scope.hide=true;
	}
	$scope.addHobby= function(){
		myService.addHobby($scope.hobby).then(function(data) {
			$scope.info = data;
		})
		$scope.show=false;
		$scope.hide=false;
	}

});