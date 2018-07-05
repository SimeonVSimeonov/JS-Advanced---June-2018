let expect = require("chai").expect;
let lookupChar = require("../03. Char Lookup").lookupChar;

describe("find char at index", () => {
    it('should return undefined for 22,2', function () {
        expect(lookupChar(22, 2)).to.be.undefined;
    });
    it('should return undefined for "javaScript","JSCORE"', function () {
        expect(lookupChar("javaScript","JSCORE")).to.be.undefined;
    });
    it('should return undefined for floating point number', function () {
        expect(lookupChar("Zoro",1.2)).to.be.undefined;
    });
    it('should return incoret index for "worldCup", 8', function () {
        expect(lookupChar("worldCup",8)).to.be.equal("Incorrect index");
    });
    it('should return incorent index for "Zoro", -1', function () {
        expect(lookupChar("Zoro",-1)).to.be.equal("Incorrect index");
    });

    it('should return char "Z", from "Zagorka Retro", 0', function () {
        expect(lookupChar("Zagorka Retro",0)).to.be.equal("Z");
    });
    it('should return char "A", from "VodkA", 4', function () {
        expect(lookupChar("VodkA",4)).to.be.equal("A");
    });
});