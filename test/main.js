var expect = require("chai").expect;
var main = require("../src/main");

describe("Sample Test", function () {
    describe("Hello function test ", function () {
        it("should say hello to the user", function () {
            const user = "Application"
            var actual = main.sayHello(user);

            expect(actual).to.equal("Hello Application");
        });
    });
});