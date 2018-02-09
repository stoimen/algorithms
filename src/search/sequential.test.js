var sequential = require('../../src/search/sequential')

describe('Sequential search', () => {

  it('should find 4 in the list', () => {
    expect(sequential([1, 2, 3, 4, 6, 8], 4)).toBe(true)
  })

  it(`shouldn't find 4 in the list`, () => {
    expect(sequential([1,2,3,6,7,8,9,23], 4)).toBe(false)
  })

})
