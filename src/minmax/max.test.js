const max = require('./max');

test(`finding the max element in a list`, () => {
  expect(max([1, 2, 3, 4, 6, 8, 2, -1])).toBe(8)
})
