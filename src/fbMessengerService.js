const constants = require('./constants');
const request = require('request');

const FB_SUBSCRIBE_URL = "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=";

module.exports.doSubscribeRequest= function() {
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