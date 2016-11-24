'use strict';

const apiaiService = require('./apiaiService');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonBigInt = require('json-bigint');
const constants = require('./constants');
const fbMessengerService = require('./fbMessengerService');

app.use(bodyParser.text({ type: 'application/json' }));

app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] == constants.FB_VERIFY_TOKEN) {
        res.send(req.query['hub.challenge']);

        setTimeout(function () {
            fbMessengerService.doSubscribeRequest();
        }, 3000);
    } else {
        res.send('Error, wrong validation token');
    }
});


app.post('/webhook/', function (req, res) {
    try {
        var data = jsonBigInt.parse(req.body);

        if (data.entry) {
            var entries = data.entry;
            entries.forEach(function (entry) {
                var messaging_events = entry.messaging;
                if (messaging_events) {
                    messaging_events.forEach(function (event) {
                        if (event.message && !event.message.is_echo ||
                            event.postback && event.postback.payload) {
                            console.log(event);
                        }
                    });
                }
            });
        }

        return res.status(200).json({
            status: "ok"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            error: err
        });
    }

});


exports.sayHello = function (user) {
    return "Hello " + user;
}

var sendTextMessageToApiAi = function (message) {
    apiaiService.initiateSendMessage(message, "123");
}

module.exports.receivedTextMessageFromApiAi = function (error, response) {
    if (error) return console.error("Error from API AI" + error);
    console.log(response);
}

sendTextMessageToApiAi("Hi");