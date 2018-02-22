const {Node, List} = require('./linked-list.js')

let n1 = new Node(10)
let n2 = new Node(20)

test('node', () => {
  let data = { val: 10 }

  let n1 = new Node()
  expect(n1.next).toBeNull()
  expect(n1.prev).toBeNull()
  expect(n1.data).toBeNull()

  let n2 = new Node(data)
  expect(n2.data).toBe(data)
})

test('setting data and reference neighbors to a node', () => {
  let n = new Node(10)
  let prev = new Node(5)
  let next = new Node(15)
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
