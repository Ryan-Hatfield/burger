var express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

//---Static content
app.use(express.static("public"));
app.use(express.static(__dirname + "/"));

//---Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//---Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//---Import routes 
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//---Add listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});