var expect = require("chai").expect;
var constants = require("../src/constants");


describe("Check assignment of enviroment variables to constants", function () {
    it("should auto assign defaults for optional paramas", function () {
        constants.refreshConfig();

        expect(constants.APIAI_LANG).to.equal('en');
        expect(constants.REST_PORT).to.equal(5000);
        expect(constants.DATABASE_ENABLE).to.equal(true);
        expect(constants.TABLE_NAME).to.equal("JOB_SEEKERS");
    });


    it("should assign values to constants as per enviroment variables", function () {
        var testValue = "Test";
        process.env.APIAI_ACCESS_TOKEN = testValue;
        process.env.FB_PAGE_ACCESS_TOKEN = testValue;
        process.env.FB_VERIFY_TOKEN = testValue;
        process.env.APIAI_LANG = testValue;
        process.env.PORT = testValue;
        process.env.DATABASE_ENABLE = testValue;
        process.env.DATABASE_URL = testValue;
        process.env.TABLE_NAME = testValue;

        constants.refreshConfig();

        expect(constants.APIAI_ACCESS_TOKEN).to.equal(testValue);
        expect(constants.FB_PAGE_ACCESS_TOKEN).to.equal(testValue);
        expect(constants.FB_VERIFY_TOKEN).to.equal(testValue);
        expect(constants.APIAI_LANG).to.equal(testValue);
        expect(constants.REST_PORT).to.equal(testValue);
        expect(constants.DATABASE_ENABLE).to.equal(testValue);
        expect(constants.DATABASE_URL).to.equal(testValue);
        expect(constants.TABLE_NAME).to.equal(testValue)


    });
});

describe("Mandatory information check for", function () {
    describe("Mandatory information check in case of Databases DISABLED", function () {
        beforeEach(function () {
            process.env.APIAI_ACCESS_TOKEN = null;
            process.env.FB_PAGE_ACCESS_TOKEN = null;
            process.env.FB_VERIFY_TOKEN = null;
            process.env.DATABASE_ENABLE = false;
        });

        it("should return FALSE if mandatory fields are NOT available ", function () {
            constants.refreshConfig();
            expect(constants.areAllMandatoryConstantsAvailable()).to.equal(false);
        });

        it("should return TRUE if mandatory fields are available", function () {
            process.env.APIAI_ACCESS_TOKEN = "test";
            process.env.FB_PAGE_ACCESS_TOKEN = "test";
            process.env.FB_VERIFY_TOKEN = "test";
            constants.refreshConfig();
            expect(constants.areAllMandatoryConstantsAvailable()).to.equal(true);
        });
    });

    describe("Mandatory information check in case of Databases enabled / Default Case", function () {
        beforeEach(function () {
            process.env.APIAI_ACCESS_TOKEN = null;
            process.env.FB_PAGE_ACCESS_TOKEN = null;
            process.env.FB_VERIFY_TOKEN = null;
        });
        it("should return FALSE if mandatory fields are NOT available ", function () {
            constants.refreshConfig();
            expect(constants.areAllMandatoryConstantsAvailable()).to.equal(false);
        });

        it("should return TRUE if mandatory fields are available", function () {
            process.env.APIAI_ACCESS_TOKEN = "test";
            process.env.FB_PAGE_ACCESS_TOKEN = "test";
            process.env.FB_VERIFY_TOKEN = "test";
            process.env.DATABASE_URL = "test";
            constants.refreshConfig();
            expect(constants.areAllMandatoryConstantsAvailable()).to.equal(true);
        });
    });
});
