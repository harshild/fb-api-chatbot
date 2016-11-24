'use strict';

const fs = require('fs');

module.exports.saveChatToFile = function (sessionId,user,message) {
    fs.writeFile("/tmp/chat_log_"+sessionId+".txt", user+" : "+message, function (err) {
        if (err) return console.log(err);
    });
}