var PQ = require('../index.js')
var assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Object', function () {
  describe('#name', function () {
    it('should return "Weevilcorp"', function () {
      assert.equal(PQ.name, "Weevilcorp");
    });
  });
});
