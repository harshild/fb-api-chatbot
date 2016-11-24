var apiai = require('apiai');
var constants = require('./constants')
var main = require('./main')
var appUtils = require('./appUtils')

module.exports.sendMessage = function (textQuery, sender) {
    var sessionId = appUtils.getSessionId(sender);
    var app = apiai(constants.APIAI_ACCESS_TOKEN, { language: constants.APIAI_LANG, requestSource: "fb" });

    var request = app.textRequest(textQuery, {
        sessionId: sessionId
    })

        .on('response', function (response) {
            main.responseFromApiAI(null, response,sender);
        })

        .on('error', function (error) {
            main.responseFromApiAI(error, null,sender);
        });

    request.end();
}