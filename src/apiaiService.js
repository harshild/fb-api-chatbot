var apiai = require('apiai');
var constants = require('./constants')
var main = require('./main')

module.exports.initiateSendMessage = function (textQuery, sessionId) {
    var app = apiai(constants.APIAI_ACCESS_TOKEN);
    var responseData;

    var request = app.textRequest(textQuery, {
        sessionId: sessionId
    })

        .on('response', function (response) {
            main.receivedTextMessageFromApiAi(null, response);
        })

        .on('error', function (error) {
            main.receivedTextMessageFromApiAi(error, null);
        });

    request.end();
}