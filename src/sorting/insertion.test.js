const sort = require('./insertion')

test('insertion sort', () => {
  expect(sort([9, 7, 8, 6, 5, 4, 3, 3, 3, 2, 2, 1]))
    .toEqual([1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9])
})
