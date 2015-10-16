var minmax = require('./../minmax/minmax');

describe('Maximum and Maximum', function () {

  it('should find both min and max items in a list', function() {
    expect(minmax([2, 3, 5, 6, 4, 3, 6, 78, 8, 9, 0])).toEqual([0, 78]);
  });

});
