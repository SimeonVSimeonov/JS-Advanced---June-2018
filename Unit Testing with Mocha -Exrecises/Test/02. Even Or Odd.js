let expect = require("chai").expect;
let isOddOrEven = require("../02. Even Or Odd").isOddOrEven;

describe("Even or odd string length", (() => {
    it('should return undefined from integer input', (() => {
        expect(isOddOrEven(5)).to.be.undefined;
    }));
    it('should return even for empty string', (() => {
        expect(isOddOrEven("")).to.be.equal("even");
    }));

    it('should return odd from "3.144"', (() => {
        expect(isOddOrEven("3.144")).to.be.equal("odd");
    }));

}));