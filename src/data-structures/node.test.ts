// Node.test.ts
import Node from './node'

describe('Node', () => {
  it('should create a node with correct data and null pointers', () => {
    const data = 42
    const node = new Node(data)
    expect(node.data).toBe(data)
    expect(node.next).toBeNull()
    expect(node.prev).toBeNull()
  })

  it('should set next node correctly', () => {
    const node1 = new Node('first')
    const node2 = new Node('second')
    node1.setNext(node2)
    expect(node1.next).toBe(node2)
  })

  it('should set previous node correctly', () => {
    const node1 = new Node('first')
    const node2 = new Node('second')
    node2.setPrev(node1)
    expect(node2.prev).toBe(node1)
  })

  it('should create a node from an object', () => {
    const data = { name: 'test' }
    const obj = { data }
    const node = Node.fromObject(obj)
    expect(node.data).toEqual(data)
    expect(node.next).toBeNull()
    expect(node.prev).toBeNull()
  })
})