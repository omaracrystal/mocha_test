process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../server/app');
// var Blob = require("../server/models/blob");

var should = chai.should();
chai.use(chaiHttp);


describe('Should output total discount', function() {
  it('should return 10 if total cost is $100 and the discount is 10%', function() {
    expect(totalDiscount(100, 10)).to.equal("Your total discount is 10"););
  });
  it('should return 100 if total cost is $100 and the discount is 100%', function() {
    expect(totalDiscount(100, 100)).to.equal("Your total discount is 100"););
  });
  it('should return 0 if total cost is $100 and the discount is 0%', function() {
    expect(totalDiscount(100, 0)).to.equal("Your total discount is 0"););
  });
    it('should return "Please choose a discount that is between 0 and 100." if the discount is 101%', function() {
    expect(totalDiscount(100, 0)).to.equal("Please choose a discount that is between 0 and 100."););
  });
    it('should return "Please choose a discount that is between 0 and 100." if discount is -1%', function() {
    expect(totalDiscount(100, -1)).to.equal("Please choose a discount that is between 0 and 100."););
  });
});
