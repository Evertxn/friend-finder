// Import friend data.
var friendsArray = require('../data/friends.js');

module.exports = function(app) {

    //GET and POST request
    app.get('/api/friends', function(request, result) {
        result.json(friendsArray);
    });

    app.post("/api/friends", function(request, result) {
        var you = request.body;
        var newFriend = -1;
        var newFriendScore = 100;
        var currentFriendScore = 0;
        // Looping through all friends in the friends table
        // Find the friend with the lowest score difference
        // Return the friend so we can show it.
        for (i = 0; i < friendsAray.length; i++) {

            if (you.sex != friendsArray[i].sex) {
                for (j = 0; j < you.scores.length; j++) {

                    currentFriendScore = currentFriendScore + Math.abs(friendsArray[i].scores[j] - you.scores[j]);
                }
                if (currentFriendScore <= newFriendScore) {
                    newFriend = i;
                    newFriendScore = currentFriendScore;
                }
                currentFriendScore = 0;
            }
        }
        friendsArray.push(you);
        newFriendDetails = friendsArray[newFriend];
        result.json(newFriendDetails);

    });


};


