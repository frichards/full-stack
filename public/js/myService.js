var app = angular.module('myData')

app.service('myService', function($http, $q){
	this.getFriends = function(){
		var d = $q.defer();
		$http({
			method:'GET',
			url: 'http://localhost:4837/friends'
		}).success(function(data){
			d.resolve(data);
		});
		return d.promise;
	};
	this.getFamily = function(){
		var d = $q.defer();
		$http({
			method:'GET',
			url: 'http://localhost:4837/family'
		}).success(function(data){
			d.resolve(data);
		});
		return d.promise;
	};
	this.getActivities = function(){
		var d = $q.defer();
		$http({
			method:'GET',
			url: 'http://localhost:4837/activities'
		}).success(function(data){
			d.resolve(data);
		});
		return d.promise;
	};
	this.getMe = function(){
		var d = $q.defer();
		$http({
			method:'GET',
			url: 'http://localhost:4837/me'
		}).success(function(data){
			d.resolve(data);
		});
		return d.promise;
	}

		 this.addFriend= function(fname, fage, friendsince){
			var d = $q.defer();
			$http({
				method:'POST',
				url: 'http://localhost:4837/friends',
				data: {name: fname,
						age: fage,
						friend_since: friendsince}
			}).success(function(data){
				d.resolve(data);

			}).error(function (err){
				d.reject(err);
			});

		return d.promise;
		};
		 this.addFamily= function(famname, famage, relation){
			var d = $q.defer();
			$http({
				method:'POST',
				url: 'http://localhost:4837/family',
				data: {name: famname,
						age: famage,
						relationship: relation}
			}).success(function(data){
				d.resolve(data);

			}).error(function (err){
				d.reject(err);
			});

		return d.promise;
		};

		 this.addHobby= function(hobby){
			var d = $q.defer();
			$http({
				method:'POST',
				url: 'http://localhost:4837/activities',
				data: {activity: hobby}
			}).success(function(data){
				d.resolve(data);

			}).error(function (err){
				d.reject(err);
			});

		return d.promise;
		};

});
