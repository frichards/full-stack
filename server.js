var express = require('express');
var bodyParser = require('body-parser');


var myData = require('./server-assets/myData.js');
var app = express();
app.use(bodyParser());
app.use(function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
	next();
})

app.listen(4837);

app.get('/', function(req, res){
  res.send('hello world');
})

app.route ('/family')
	.get( function(req, res){
		var myFamily = myData.getFamily();
		res.send(myFamily);
	})
	.post(function(req, res){
		var newObj = {};
		newObj.name = req.body.name;
		newObj.age = req.body.age;
		newObj.relationship = req.body.relationship;
		myData.addFamily(newObj);
		var myFamily = myData.getFamily();
		res.send(myFamily);
	})

app.route ('/friends')
	.get( function(req, res){
		var myFriends = myData.getFriends();
		res.send(myFriends);
	})
	.post(function(req, res){
		console.log(req.body.name);
		var newObj = {};
		newObj.name = req.body.name;
		newObj.age = req.body.age;
		newObj.friend_since = req.body.friend_since;
		myData.addFriend(newObj);
		var myFriends = myData.getFriends();
		res.send(myFriends);
	})

app.route ('/activities')
	.get( function(req, res){
		var myActivities = myData.getActivities();
		res.send(myActivities);
	})
	.post(function(req, res){
		var myActivities = myData.getActivities();
		myActivities.push(req.body.activity)
		res.send(myActivities);
	})

app.route('/me')
	.get( function(req, res){
		var myInfo = myData.getMe();
		res.send(myInfo);
	})