

//creating routes for Home, and Survey pages
app.use(function(req, res){
    res.sendfile('./public/home.html');
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});




