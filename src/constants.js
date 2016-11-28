const appUtils = require('./appUtils');

module.exports.APIAI_ACCESS_TOKEN = process.env.APIAI_ACCESS_TOKEN
module.exports.FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
module.exports.FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
module.exports.APIAI_LANG = process.env.APIAI_LANG || 'en';
module.exports.REST_PORT = (process.env.PORT || 5000);
module.exports.DATABASE_ENABLE = process.env.DATABASE_ENABLE || true;
module.exports.DATABASE_URL = process.env.DATABASE_URL
module.exports.TABLE_NAME = process.env.TABLE_NAME || "JOB_SEEKERS";

module.exports.areAllMandatoryConstantsAvailable = function () {

    if (!module.exports.DATABASE_ENABLE || module.exports.DATABASE_ENABLE != 'false') {
        return appUtils.isObjectDefined(process.env.APIAI_ACCESS_TOKEN) &&
            appUtils.isObjectDefined(process.env.FB_PAGE_ACCESS_TOKEN) &&
            appUtils.isObjectDefined(process.env.FB_VERIFY_TOKEN);
    }
    else {
        return appUtils.isObjectDefined(process.env.APIAI_ACCESS_TOKEN) &&
            appUtils.isObjectDefined(process.env.FB_PAGE_ACCESS_TOKEN) &&
            appUtils.isObjectDefined(process.env.FB_VERIFY_TOKEN) &&
            appUtils.isObjectDefined(process.env.DATABASE_URL);
    }
}