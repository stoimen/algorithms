const Node = require('./node')
const List = require('./linked-list')

let n1, n2, n3

beforeEach(() => {
  n1 = new Node(10)
  n2 = new Node(20)
  n3 = new Node(30)
})

// constructor
test('List', () => {
  let l = new List()
  expect(l).toBeInstanceOf(List)
  expect(l.head).toEqual(null)
  expect(l.tail).toEqual(null)
})

test('insertAfter', () => {
  let l = new List()

  l.insertAfter(null, n1)
  expect(l.head).toBe(n1)
  expect(l.tail).toBe(n1)

  l.insertAfter(n1, n3)
  expect(l.head).toBe(n1)
  expect(l.tail).toBe(n3)
  expect(n1.next).toBe(n3)
  expect(n3.prev).toBe(n1)

  l.insertAfter(n1, n2)
  expect(n2.prev).toBe(n1)
  expect(n2.next).toBe(n3)
  expect(n1.next).toBe(n2)
  expect(n3.prev).toBe(n2)
})

test('insertBefore', () => {
  let l = new List()

  l.insertBefore(null, n3)
  expect(l.head).toBe(n3)
  expect(l.tail).toBe(n3)

  l.insertBefore(n3, n1)
  expect(l.head).toBe(n1)
  expect(l.tail).toBe(n3)
  expect(n1.next).toBe(n3)
  expect(n3.prev).toBe(n1)

  l.insertBefore(n3, n2)
  expect(n2.prev).toBe(n1)
  expect(n2.next).toBe(n3)
  expect(n1.next).toBe(n2)
  expect(n3.prev).toBe(n2)
})

test('map', () => {
  let l = new List()

  l.push(n1)
  l.push(n2)

  l.map((node) => (node.data /= 2))

  expect(n1.data).toEqual(5)
  expect(n2.data).toEqual(10)
})

test('push', () => {
  let l = new List()

  l.push(n1)
  l.push(n2)

  expect(n1.prev).toBeNull()
  expect(n1.next).toBe(n2)
  expect(n2.prev).toBe(n1)
  expect(n2.next).toBeNull()
})

test('remove', () => {
  let l = new List()

  l.push(n1)
  l.push(n2)
  l.push(n3)

  l.remove(n2)

  expect(n1.next).toBe(n3)
  expect(n3.prev).toBe(n1)
  expect(n2.next).toBeNull()
  expect(n2.prev).toBeNull()
})

test('swap', () => {
  let l = new List()

  l.push(n1)
  l.push(n2)

  l.swap(n1, n2)
  expect(n1.data).toEqual(20)
  expect(n2.data).toEqual(10)
})

test('toString', () => {
  let l = new List()

  l.push(n1)
  l.push(n2)

  expect(l.toString()).toEqual('10 20')
})
