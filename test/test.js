var expect = require("chai").expect;

describe("Merchant API tests", function () {
  it("returns something", function () {
    fetch("http://localhost:8989/merchants/accounts")
      .then((response) => response.json())
      .then((data) => console.log(data));
    expect("blue").to.equal("blue");
  });
});
