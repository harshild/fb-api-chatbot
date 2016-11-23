var apiai = require('apiai');
var constants = require('./constants')

var app = apiai(exports.APIAI_ACCESS_TOKEN);

var request = app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();