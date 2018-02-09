const min = require('./min');

test(`finding the min element in a list`, () => {
  expect(min([1, 2, 3, 4, 6, 8, 2, -1])).toBe(-1)
})
