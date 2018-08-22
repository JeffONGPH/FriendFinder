var friends = require('../data/friend.js');


module.exports = function(app){
 
    //GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friends);
  });

  