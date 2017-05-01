var path = require('path');

module.exports = function(app) {

    // The GET route for /survey from survey.html.
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // The USE route returns home.html for any undefined GET routes.
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};



