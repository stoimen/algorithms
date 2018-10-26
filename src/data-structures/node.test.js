const Node = require('./node')

let n1, n2, n3

beforeEach(() => {
  n1 = new Node(10)
  n2 = new Node(20)
  n3 = new Node(30)
})

// constructor
describe('Node', () => {
  test('new without data', () => {
    let node = new Node()
    expect(node.next).toBeNull()
    expect(node.prev).toBeNull()
    expect(node.data).toBeNull()
  })

  test('new with data', () => {
    let data = { val: 10 }
    let node = new Node(data)

    expect(node.data).toBe(data)
  })
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
