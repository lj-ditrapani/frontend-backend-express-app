var assert = require('assert');
var foo = require("../src/foo");

describe('foo', function () {
  it('should return Hello, world', function () {
    assert.equal(foo(), "Hello, world!")
  });
});
