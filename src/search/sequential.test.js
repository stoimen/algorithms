const search = require('./sequential')

test(`find item in the list`, () => {
  expect(search([1, 2, 3, 4, 6, 8], 4)).toBe(true)
})

test(`don't find item in the list`, () => {
  expect(search([1, 2, 3, 6, 7, 8, 9, 23], 4)).toBe(false)
})
