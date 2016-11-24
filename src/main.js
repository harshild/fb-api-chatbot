'use strict';

const apiaiService = require('./apiaiService');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonBigInt = require('json-bigint');
const constants = require('./constants');
const fbMessengerService = require('./fbMessengerService');
const appUtils = require('./appUtils');

app.use(bodyParser.text({ type: 'application/json' }));

const sessionIds = new Map();

function processMessagingRequest(event) {
    var sender = event.sender.id.toString();

    if (fbMessengerService.isEventaTextMessage) {
        var text = event.message ? event.message.text : event.postback.payload;

        if (!sessionIds.has(sender)) {
            sessionIds.set(sender, uuid.v1());
        }
        console.log("Text", text);

        apiaiService.sendMessage(test, {
            sessionId: sessionIds.get(sender)
        });

    }
}

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
                            processMessagingRequest(event);
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
    apiaiService.sendMessage(message, "123");
}

module.exports.responseFromApiAI = function (error, response) {
    if (error) return console.error("Error from API AI" + error);
    if (appUtils.isObjectDefined(response.result)) {
        var responseText = response.result.fulfillment.speech;
        var responseParameters = response.result.parameters;
        var responseContexts = response.result.contexts;;

        if (appUtils.isObjectDefined(responseText)) {
            console.log('Response as text message' + responseText);
            var splittedText = appUtils.splitStringResponse(responseText);

            async.eachSeries(splittedText, function (textPart, callback) {
                fbMessengerService.sendFBMessage(sender, { text: textPart }, callback);
            });
        }

    }
}

app.listen(constants.REST_PORT, function () {
    console.log('Rest service ready on port ' + REST_PORT);
});


if (constants.areAllMandatoryConstantsAvailable) {
    fbMessengerService.doSubscribeRequest();
}
else {
    console.error("Please check if all MANDATORY parameters are set in execution enviroment. For details on required variables, please refer to project's ReadME ");
}