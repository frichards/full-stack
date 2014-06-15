var family = [{
	"name": "Eric",
	"age": 29,
	"relationship": "Husband",
},
{
	"name": "Olive",
	"age": 5,
	"relationship": "Daughter/Cat",
},
{
	"name": "Yukio",
	"age": 59,
	"relationship": "Father",
},
{
	"name": "Kumiko",
	"age": 62,
	"relationship": "Mother",
},
{
	"name": "Hidehiro",
	"age": 36,
	"relationship": "Brother",
}]

var friends = [{
	"name": "Linda M.",
	"age": 26,
	"friend_since": 2006,
},
{
	"name": "Stephen",
	"age": 38,
	"friend_since": 2013,
},
{
	"name": "Jimena",
	"age": 36,
	"friend_since": 2005,
}]

var activities = ["swimming", "playing video game", "sewing", "learning"]

var me = [{
	"name": "Fumiko",
	"height": "5 feet 3 inches",
	"age": "31",
	"favorite movie": "Beauty and the Beast",
	"favorite artist": "Lala Zombie",
	"favorite food": "eggs",
}]


module.exports.getFamily = function(){
  return family;
};

module.exports.addFamily = function(newFamily){
  family.push(newFamily);
};

module.exports.getFriends = function(){
  return friends;
};

module.exports.addFriend = function(newFriend){
  friends.push(newFriend);
};

module.exports.getActivities = function(){
  return activities;
};

module.exports.addActivities = function(newActivity){
  activities.push(newActivity);
};

module.exports.getMe = function(){
  return me;
};















