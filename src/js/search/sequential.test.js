var sequential = require('./../search/sequential');

describe('Sequential search', function () {

  it('should find the element at position 0 ', function() {
    expect(sequential([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

});