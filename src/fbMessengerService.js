const constants = require('./constants');
const request = require('request');

const FB_SUBSCRIBE_URL = "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=";
const FB_SEND_MESSAGE_URL = 'https://graph.facebook.com/v2.6/me/messages';

module.exports.doSubscribeRequest = function () {
    request({
        method: 'POST',
        uri: FB_SUBSCRIBE_URL + constants.FB_PAGE_ACCESS_TOKEN
    },
        function (error, response, body) {
            if (error) {
                console.error('Error while subscription: ', error);
            } else {
                console.log('Subscription result: ', response.body);
            }
        });
}

module.exports.sendFBMessage = function (sender, messageData, callback) {
    request({
        url: FB_SEND_MESSAGE_URL,
        qs: { access_token: constants.FB_PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: sender },
            message: messageData
        }
    }, function (error, response, body) {
        if (error) {
            console.log('Error sending message: ', error);
        } else if (response.body.error) {
            console.log('Error: ', response.body.error);
        }

        if (callback) {
            callback();
        }
    });
}

module.exports.isEventATextMessage = function(event){
    return (event.message && event.message.text) || (event.postback && event.postback.payload);
}