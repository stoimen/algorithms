const sort = require('./bubble')

test(`bubble sort`, () => {
  expect(sort([2,3,1])).toEqual([1,2,3])
})