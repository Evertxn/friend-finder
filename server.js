var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//Code to set the listen and let us know we are connected.
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


// Import routes.
require(path.join(__dirname, '/app/routing/apiRoutes'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes'))(app);


