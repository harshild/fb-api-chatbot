var expect = require("chai").expect;
const appUtils = require('../src/appUtils');


describe("Object validity check", function () {
    describe("for negative scenarios where", function () {
        it("object is NOT defined", function () {
            var obj = undefined;
            expect(appUtils.isObjectDefined(obj)).to.equal(false);
        });

        it("object is NULL", function () {
            var obj = null;
            expect(appUtils.isObjectDefined(obj)).to.equal(false);
        });


        it("object value is string 'null' ", function () {
            var obj = 'null';
            expect(appUtils.isObjectDefined(obj)).to.equal(false);
        });

        it("object value is string 'undefined' ", function () {
            var obj = 'undefined';
            expect(appUtils.isObjectDefined(obj)).to.equal(false);
        });
    });

    describe("for positive scenarios where", function () {
        it("object value is FALSE", function () {
            var obj = false;
            expect(appUtils.isObjectDefined(obj)).to.equal(true);
        });

        it("object value Defined and NOT NULL", function () {
            var obj = "a";
            expect(appUtils.isObjectDefined(obj)).to.equal(true);
        });
    });
});