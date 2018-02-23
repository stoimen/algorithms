const {Node, List} = require('./linked-list.js')

let n1 = new Node(10)
let n2 = new Node(20)

afterEach(() => {
  // restore
  n1.data = 10
  n2.data = 20
})

test('node', () => {
  let n1 = new Node()
  expect(n1.next).toBeNull()
  expect(n1.prev).toBeNull()
  expect(n1.data).toBeNull()

  let data = { val: 10 }

  let n2 = new Node(data)
  expect(n2.data).toBe(data)
})

test('setting data and reference neighbors to a node', () => {
  let n = new Node(10)
  let prev = new Node()
  let next = new Node()
  let data = { val: 10 }

  n.prev = prev
  n.next = next
  n.data = 'data as a string'

  n.next.data = data
  expect(next.data).toBe(data)
})

test('linked list', () => {
  let l = new List()
  expect(l.head).toEqual(null)
  expect(l.tail).toEqual(null)

  l.push(n1)
  expect(l.head).toBe(n1)
  expect(l.tail).toBe(n1)

  l.push(n2)
  expect(l.head).toEqual(n1)
  expect(l.tail).toEqual(n2)
})

test('pointers between elements', () => {
  let l = new List()

  l.push(n1)
  l.push(n2)

  expect(n1.prev).toBeNull()
  expect(n1.next).toBe(n2)
  expect(n2.prev).toBe(n1)
  expect(n2.next).toBeNull()
})

test('popping from a linked list', () => {
  let l = new List()

  l.push(n1)
  l.push(n2)

  expect(l.pop()).toBe(n2)
  expect(l.tail).toBe(n1)
  expect(l.head).toBe(l.tail) // n1

  expect(l.pop()).toBe(n1)
  expect(l.head).toBeNull()
  expect(l.tail).toBeNull()
})

test('map on list', () => {
  let l = new List()

  l.push(n1)
  l.push(n2)

  l.map((node) => node.data /= 2)

  expect(n1.data).toEqual(5)
  expect(n2.data).toEqual(10)
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
