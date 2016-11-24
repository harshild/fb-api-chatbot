var apiai = require('apiai');
var constants = require('./constants')
var main = require('./main')

module.exports.sendMessage = function (textQuery, sessionId) {
    var app = apiai(constants.APIAI_ACCESS_TOKEN,, { language: constants.APIAI_LANG, requestSource: "fb" });
    var responseData;

    var request = app.textRequest(textQuery, {
        sessionId: sessionId
    })

        .on('response', function (response) {
            main.responseFromApiAI(null, response);
        })

        .on('error', function (error) {
            main.responseFromApiAI(error, null);
        });

    request.end();
}