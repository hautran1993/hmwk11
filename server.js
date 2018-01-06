//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

//set up Express
var app = express();
var PORT = process.env.PORT || 8080;

//set up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//body-parser is middleware, using it to manipulate the date
htmlRoutes(app);
apiRoutes(app);

//listener
app.listen(PORT, function(){
    console.log('LISTENING ON PORT: ' + PORT);
});
