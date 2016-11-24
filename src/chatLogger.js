'use strict';

const fs = require('fs');

module.exports.saveChatToFile = function (sessionId,user,message) {
    fs.writeFile("/tmp/test_"+sessionId+".txt", user+" : "+message, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}