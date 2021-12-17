const chai = require("chai");
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

describe("Testing feature: ", () => {
  describe("Testing demo method: ", () => {
    it("Check the returning value.", () => {
      result = 2;
      result.should.be.equal(2);
    });
  });
});
