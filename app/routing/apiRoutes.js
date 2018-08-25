var friends = require('../data/friend.js');
var path 		= require('path');


module.exports = function(app){
 
    //GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friends);
  });

  app.post('/api/friends', function(req,res){
    
    var newFriend = req.body;
    var newFriendScores = newFriend.scores;
    var scoresDiffArray = [];
    

    //Exisitng friends list run through 
    for(var i=0; i<friends.length; i++){
      var scoresDiff = 0;
      //Compare scores of each friend
      for(var j=0; j<newFriendScores.length; j++){
        // scoresDiff = scoresDiff + absolute score difference 
        scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      scoresDiffArray.push(scoresDiff);
    }

    //Best match is the lowest score in the array.
    var lowest = Math.min.apply(null, scoresDiffArray)
    var matchID = 0;
    for (var i=0; i<scoresDiffArray.length; i++){
      if (lowest = scoresDiffArray[i] ) {
        matchID = i;
      }
    }
    
    //send match response
    var match = friends[matchID];
    res.json(match);

    // add new friend to data array
    friends.push(newFriend);
  });
};