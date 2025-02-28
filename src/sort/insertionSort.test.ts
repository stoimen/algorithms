import List from '../data-structures/linkedList'
import Node from '../data-structures/node'
import insertionSort from './insertionSort'

describe('insertionSort', () => {
  // Error conditions
  it('should throw a TypeError if list is not provided', () => {
    expect(() => insertionSort(null as any, (a: Node<number>, b: Node<number>) => a.data > b.data)).toThrow(TypeError)
  })

  it('should throw a TypeError if predicate is not a function', () => {
    const list = new List<number>()
    list.push(new Node(1))
    expect(() => insertionSort(list, null as any)).toThrow(TypeError)
  })

  // Sorting numbers
  it('should sort a list of numbers', () => {
    const list = new List<number>()
    list.push(new Node(4))
    list.push(new Node(2))
    list.push(new Node(5))
    list.push(new Node(1))
    list.push(new Node(3))

    // Predicate: swap if left.data > right.data (ascending order)
    insertionSort(list, (a, b) => a.data > b.data)

    // Expected order: 1, 2, 3, 4, 5
    expect(list.toString()).toBe('1 2 3 4 5')
  })

  it('should handle an already sorted list', () => {
    const list = new List<number>()
    list.push(new Node(1))
    list.push(new Node(2))
    list.push(new Node(3))

    insertionSort(list, (a, b) => a.data > b.data)

    // Expected order: 1, 2, 3
    expect(list.toString()).toBe('1 2 3')
  })

  it('should handle a single-element list', () => {
    const list = new List<number>()
    list.push(new Node(42))

    insertionSort(list, (a, b) => a.data > b.data)
    expect(list.toString()).toBe(JSON.stringify(42))
  })

  // Sorting strings
  it('should sort a list of strings alphabetically', () => {
    const list = new List<string>()
    list.push(new Node('banana'))
    list.push(new Node('apple'))
    list.push(new Node('cherry'))

    // Using localeCompare to determine alphabetical order.
    insertionSort(list, (a, b) => a.data.localeCompare(b.data) > 0)
    const expected = `${JSON.stringify('apple')} ${JSON.stringify('banana')} ${JSON.stringify('cherry')}`
    expect(list.toString()).toBe(expected)
  })

  // Sorting with duplicate values
  it('should handle duplicate elements correctly', () => {
    const list = new List<number>()
    list.push(new Node(3))
    list.push(new Node(1))
    list.push(new Node(2))
    list.push(new Node(1))
    list.push(new Node(3))

    insertionSort(list, (a, b) => a.data > b.data)
    
    // Expected sorted order: 1, 1, 2, 3, 3
    expect(list.toString()).toBe('1 1 2 3 3')
  })
})
