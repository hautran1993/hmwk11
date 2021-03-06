//has to create the correct path to link to the html file
var path = require("path");
//=======================================

module.exports = function(app) {
  //html get requests
  //below code handles different pathways for each page
  //in each of the below cases the user is shown an html content.
  //home page path function
  app.get("/", function(req, res){
      res.sendFile(path.join(__dirname ,"../public/home.html"));
  });
  //each app.get is to send to another path
  app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname,"../public/survey.html"));
  });
  // If no matching route is found default to home
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });
};
