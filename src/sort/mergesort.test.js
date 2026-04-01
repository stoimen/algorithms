const List = require('../data-structures/linkedList').default
const Node = require('../data-structures/node').default
const mergeSort = require('./mergesort')

describe('mergeSort', () => {
  it('should throw a TypeError if list is not provided', () => {
    expect(() => mergeSort(null, (a, b) => a.data > b.data)).toThrow(TypeError)
  })

  it('should throw a TypeError if predicate is not a function', () => {
    const list = new List()
    list.push(new Node(1))

    expect(() => mergeSort(list, null)).toThrow(TypeError)
  })

  it('should sort a list of numbers in ascending order', () => {
    const list = new List()
    list.push(new Node(4))
    list.push(new Node(2))
    list.push(new Node(5))
    list.push(new Node(1))
    list.push(new Node(3))

    mergeSort(list, (a, b) => a.data > b.data)

    expect(list.toString()).toBe('1 2 3 4 5')
  })

  it('should keep an already sorted list unchanged', () => {
    const list = new List()
    list.push(new Node(1))
    list.push(new Node(2))
    list.push(new Node(3))

    mergeSort(list, (a, b) => a.data > b.data)

    expect(list.toString()).toBe('1 2 3')
  })

  it('should handle duplicate values correctly', () => {
    const list = new List()
    list.push(new Node(3))
    list.push(new Node(1))
    list.push(new Node(2))
    list.push(new Node(1))
    list.push(new Node(3))

    mergeSort(list, (a, b) => a.data > b.data)

    expect(list.toString()).toBe('1 1 2 3 3')
  })

  it('should sort strings alphabetically', () => {
    const list = new List()
    list.push(new Node('banana'))
    list.push(new Node('apple'))
    list.push(new Node('cherry'))

    mergeSort(list, (a, b) => a.data.localeCompare(b.data) > 0)

    expect(list.toString()).toBe('"apple" "banana" "cherry"')
  })

  it('should handle single-element and empty lists', () => {
    const single = new List()
    single.push(new Node(42))
    mergeSort(single, (a, b) => a.data > b.data)
    expect(single.toString()).toBe('42')

    const empty = new List()
    mergeSort(empty, (a, b) => a.data > b.data)
    expect(empty.toString()).toBe('')
  })

  it('should update tail pointer after sorting', () => {
    const list = new List()
    list.fromArray([10, 1, 7])

    mergeSort(list, (a, b) => a.data > b.data)

    expect(list.tail && list.tail.data).toBe(10)
    expect(list.tail && list.tail.next).toBeNull()
  })
})
