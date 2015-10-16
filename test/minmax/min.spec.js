var min = require('../../src/minmax/min');

describe('Minimum', function () {

  it('should find the minimum element in a list', function() {
    expect(min([1, 2, 3, 4, 6, 8, 2, -1])).toBe(-1);
  });

});
