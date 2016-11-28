var expect = require("chai").expect;
var constants = require("../src/constants");


describe("Mandatory information check for", function () {
    describe("Mandatory information check in case of Databases DISABLED", function () {
        beforeEach(function () {
            process.env.APIAI_ACCESS_TOKEN = null;
            process.env.FB_PAGE_ACCESS_TOKEN = null;
            process.env.FB_VERIFY_TOKEN = null;
            process.env.DATABASE_ENABLE = false;
        });

        it("should return FALSE if mandatory fields are NOT available ", function () {
            expect(constants.areAllMandatoryConstantsAvailable()).to.equal(false);
        });

        it("should return TRUE if mandatory fields are available", function () {
            process.env.APIAI_ACCESS_TOKEN = "test";
            process.env.FB_PAGE_ACCESS_TOKEN = "test";
            process.env.FB_VERIFY_TOKEN = "test";
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
            expect(constants.areAllMandatoryConstantsAvailable()).to.equal(false);
        });

        it("should return TRUE if mandatory fields are available", function () {
            process.env.APIAI_ACCESS_TOKEN = "test";
            process.env.FB_PAGE_ACCESS_TOKEN = "test";
            process.env.FB_VERIFY_TOKEN = "test";
            process.env.DATABASE_URL = "test";
            expect(constants.areAllMandatoryConstantsAvailable()).to.equal(true);
        });
    });
});
