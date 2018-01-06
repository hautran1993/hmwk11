//dependencies
const path = require("path");
const friends = require("../data/friends");

//creating apiRoutes
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
  //when using get your getting a response from servers(dataware houses)
  //in your case friends.js<---could be firebase, mysql, other databses
    res.json(friends);
    var friendFinder = [];
  });
  //post send a request to the server
  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      scoresDifference: 0
    };
    console.log(req.body);
    var name = req.body.name;
    var photo = req.body.photo;
    var userScores = req.body.scores;
    //for loop to go through friends
    var newMatch ;
    var previousMatchValue = 0;
    for (var i = 0; i < friends.length; i++) {
      //for loop to to gin to friends and into scores by using friends[i]
      for(var j = 0 ; j < friends[i].scores.length; j++) {
        var currentDifference = 0;
        if(friends[i].scores[j] !== userScores[j]){
      currentDifference+= Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
        };
      // friends[i].scores[j] - userScores[j];
      // previousMatchValue.push(Math.abs);
      };
      console.log(currentDifference);
      //do logic to pick on peeps

    };

  });
//clear the friendlist table, not sure why it needs to be here though
  app.post("/api/clear",function(res, req){
    friendList = [];
    console.log(friendList);
  });
}
