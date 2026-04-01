const heapsort = require('./heapsort')

describe('heapsort', () => {
  it('throws TypeError when input is not an array', () => {
    expect(() => heapsort(null)).toThrow(TypeError)
    expect(() => heapsort(undefined)).toThrow(TypeError)
    expect(() => heapsort('not-array')).toThrow(TypeError)
  })

  it('sorts an empty array', () => {
    const data = []
    const result = heapsort(data)

    expect(result).toBe(data)
    expect(result).toEqual([])
  })

  it('sorts a single-element array', () => {
    const data = [42]
    expect(heapsort(data)).toEqual([42])
  })

  it('sorts a random unsorted array', () => {
    const data = [4, 10, 3, 5, 1]
    expect(heapsort(data)).toEqual([1, 3, 4, 5, 10])
  })

  it('handles duplicate values correctly', () => {
    const data = [5, 1, 5, 3, 1, 2]
    expect(heapsort(data)).toEqual([1, 1, 2, 3, 5, 5])
  })

  it('handles negative numbers', () => {
    const data = [0, -10, 7, -3, 2]
    expect(heapsort(data)).toEqual([-10, -3, 0, 2, 7])
  })

  it('keeps an already sorted array unchanged', () => {
    const data = [1, 2, 3, 4, 5]
    expect(heapsort(data)).toEqual([1, 2, 3, 4, 5])
  })
})
