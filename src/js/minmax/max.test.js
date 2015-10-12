var max = require('./../minmax/max');

describe('Maximum', function () {

  it('should find the max element in a list', function() {
    expect(max([1, 2, 3, 4, 6, 8, 2, -1])).toBe(8);
  });

});
