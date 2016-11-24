const appUtils = require('./appUtils');

module.exports.APIAI_ACCESS_TOKEN = process.env.APIAI_ACCESS_TOKEN
module.exports.FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
module.exports.FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
module.exports.APIAI_LANG = process.env.APIAI_LANG || 'en';
module.exports.REST_PORT = (process.env.PORT || 5000);

module.exports.areAllMandatoryConstantsAvailable = function(){
    return appUtils.isObjectDefined(process.env.APIAI_ACCESS_TOKEN) &&
    appUtils.isObjectDefined(process.env.FB_PAGE_ACCESS_TOKEN) &&
    appUtils.isObjectDefined(process.env.FB_VERIFY_TOKEN);
}