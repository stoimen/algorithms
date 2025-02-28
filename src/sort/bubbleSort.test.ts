import List from '../data-structures/linkedList'
import Node from '../data-structures/node'
import bubbleSort from './bubbleSort'

describe('bubbleSort', () => {
  // Error conditions
  it('should throw a TypeError if list is not provided', () => {
    expect(() => bubbleSort(null as any, (a: Node<number>, b: Node<number>) => a.data > b.data)).toThrow(TypeError)
  })

  it('should throw a TypeError if predicate is not provided or not a function', () => {
    const list = new List<number>()
    list.push(new Node(1))
    expect(() => bubbleSort(list, null as any)).toThrow(TypeError)
  })

  // Sorting numbers
  it('should sort a list of two numbers', () => {
    const list = new List<number>()
    list.push(new Node(2))
    list.push(new Node(1))

    // Predicate: swap if left.data > right.data
    bubbleSort(list, (a, b) => a.data > b.data)

    // Expected list: [1, 2]
    const expected = `${JSON.stringify(1)} ${JSON.stringify(2)}`
    expect(list.toString()).toBe(expected)
  })

  it('should sort a list of three numbers', () => {
    const list = new List<number>()
    list.push(new Node(3))
    list.push(new Node(1))
    list.push(new Node(2))

    bubbleSort(list, (a, b) => a.data > b.data)

    // Expected list: [1, 2, 3]
    const expected = `${JSON.stringify(1)} ${JSON.stringify(2)} ${JSON.stringify(3)}`
    expect(list.toString()).toBe(expected)
  })

  it('should not change an already sorted list', () => {
    const list = new List<number>()
    list.push(new Node(1))
    list.push(new Node(2))
    list.push(new Node(3))

    bubbleSort(list, (a, b) => a.data > b.data)

    const expected = `${JSON.stringify(1)} ${JSON.stringify(2)} ${JSON.stringify(3)}`
    expect(list.toString()).toBe(expected)
  })

  it('should handle a single element list', () => {
    const list = new List<number>()
    list.push(new Node(1))

    bubbleSort(list, (a, b) => a.data > b.data)

    expect(list.toString()).toBe(JSON.stringify(1))
  })

  // Sorting strings
  it('should sort a list of strings alphabetically', () => {
    const list = new List<string>()
    list.push(new Node('banana'))
    list.push(new Node('apple'))
    list.push(new Node('cherry'))

    // Using localeCompare: swap if a.data comes after b.data alphabetically
    bubbleSort(list, (a, b) => a.data.localeCompare(b.data) > 0)

    const expected = `${JSON.stringify('apple')} ${JSON.stringify('banana')} ${JSON.stringify('cherry')}`
    expect(list.toString()).toBe(expected)
  })

  // Sorting with duplicate values
  it('should handle duplicate elements correctly', () => {
    const list = new List<number>()
    list.push(new Node(2))
    list.push(new Node(1))
    list.push(new Node(2))
    list.push(new Node(1))

    bubbleSort(list, (a, b) => a.data > b.data)

    // Expected sorted list: [1, 1, 2, 2]
    const expected = `${JSON.stringify(1)} ${JSON.stringify(1)} ${JSON.stringify(2)} ${JSON.stringify(2)}`
    expect(list.toString()).toBe(expected)
  })
})
