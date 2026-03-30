const quicksort = require('./quicksort')

describe('quicksort', () => {
  it('should throw a TypeError if input is not an array', () => {
    expect(() => quicksort(null)).toThrow(TypeError)
  })

  it('should throw a TypeError if comparator is not a function', () => {
    expect(() => quicksort([1, 2, 3], null)).toThrow(TypeError)
  })

  it('should sort numbers in ascending order by default', () => {
    expect(quicksort([5, 2, 4, 1, 3])).toEqual([1, 2, 3, 4, 5])
  })

  it('should sort numbers in descending order with a custom comparator', () => {
    const desc = (a, b) => b - a
    expect(quicksort([5, 2, 4, 1, 3], desc)).toEqual([5, 4, 3, 2, 1])
  })

  it('should sort strings alphabetically', () => {
    expect(quicksort(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry'])
  })

  it('should handle duplicate values', () => {
    expect(quicksort([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3])
  })

  it('should return a new array and keep the original array unchanged', () => {
    const input = [3, 2, 1]
    const sorted = quicksort(input)

    expect(sorted).toEqual([1, 2, 3])
    expect(input).toEqual([3, 2, 1])
    expect(sorted).not.toBe(input)
  })

  it('should handle empty and single-item arrays', () => {
    expect(quicksort([])).toEqual([])
    expect(quicksort([42])).toEqual([42])
  })
})
