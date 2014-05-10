'use strict';

beforeEach(function() {
  this.addMatchers({
    // example
    _toBeEqual: function(expected) {
      return this.actual === expected
    }
  });
});
