'use strict';

var apiaiService = require('./apiaiService');

exports.sayHello = function (user) {
    return "Hello " + user;
}

module.exports.sendTextMessageToApiAi = function (message) {
    apiaiService.initiateSendMessage(message,"123");
}


module.exports.receivedTextMessageFromApiAi = function (error,response) {
    if(error) return console.error("Error from API AI"+error);
    console.log(response);
}

