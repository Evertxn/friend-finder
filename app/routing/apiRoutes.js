// Import friend data.
var friendData = require('../data/friends.js');

module.exports = function(app) {

    //GET and POST request
    app.get('/api/friends', function(request, result) {
        result.json(friendsTable);
    });

    app.post("/api/friends", function(request, result) {
        var you = request.body;
        var newFriend = -1;
        var newFriendScore = 100;
        var currentFriendScore = 0;
        // Looping through all friends in the friends table
        // Find the friend with the lowest score difference
        // Return the friend so we can show it.
        for (i = 0; i < friendsTable.length; i++) {

            if (you.sex != friendsTable[i].sex) {
                for (j = 0; j < you.scores.length; j++) {

                    currentFriendScore = currentFriendScore + Math.abs(friendsTable[i].scores[j] - you.scores[j]);
                }
                if (currentFriendScore <= newFriendScore) {
                    newFriend = i;
                    newFriendScore = currentFriendScore;
                }
                currentFriendScore = 0;
            }
        }
        friendsTable.push(you);
        newFriendDetails = friendsTable[newFriend];
        result.json(newFriendDetails);

    });


};


