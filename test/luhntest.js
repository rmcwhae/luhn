const chai = require('chai');
const assert = chai.assert;

const check = require('../luhn');

describe('luhn', function() {
  it('should return true when given 79927398713', function() {
    assert.equal(check(79927398713), true);
  });
  
  it('should return false when given 79927398714', function() {
    assert.equal(check(79927398714), false);
  });

  it('should return true for 12345678903', function() {
    assert.equal(check(12345678903), true);
  });

});