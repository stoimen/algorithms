// List.test.ts
import List from './linkedList'
import Node from './node'

describe('List', () => {
  let list: List<any>

  beforeEach(() => {
    list = new List()
  })

  it('should initialize an empty list', () => {
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
  })

  describe('push', () => {
    it('should push a node into an empty list', () => {
      const node = new Node(1)
      list.push(node)
      expect(list.head).toBe(node)
      expect(list.tail).toBe(node)
      expect(node.prev).toBeNull()
      expect(node.next).toBeNull()
    })

    it('should push multiple nodes and update tail correctly', () => {
      const node1 = new Node(1)
      const node2 = new Node(2)
      const node3 = new Node(3)
      list.push(node1)
      list.push(node2)
      list.push(node3)

      expect(list.head).toBe(node1)
      expect(list.tail).toBe(node3)
      expect(node1.next).toBe(node2)
      expect(node2.prev).toBe(node1)
      expect(node2.next).toBe(node3)
      expect(node3.prev).toBe(node2)
    })
  })

  describe('insertAfter', () => {
    it('should insert a node after a target when the target has a next node',
      () => {
        // Build list: node1 -> node2
        const node1 = new Node(1)
        const node2 = new Node(2)
        list.push(node1)
        list.push(node2)

        // Insert node3 after node1: node1 -> node3 -> node2
        const node3 = new Node(3)
        list.insertAfter(node1, node3)

        expect(node1.next).toBe(node3)
        expect(node3.prev).toBe(node1)
        expect(node3.next).toBe(node2)
        expect(node2.prev).toBe(node3)
        expect(list.tail).toBe(node2)
      })

    it('should insert a node after a target when the target is the tail',
      () => {
        const node1 = new Node(1)
        list.push(node1)

        // node1 is tail, so insertAfter should push node2 to the end.
        const node2 = new Node(2)
        list.insertAfter(node1, node2)

        expect(node1.next).toBe(node2)
        expect(node2.prev).toBe(node1)
        expect(list.tail).toBe(node2)
      })
  })

  describe('insertBefore', () => {
    it('should insert a node before a target when the target is the head',
      () => {
        const node1 = new Node(1)
        list.push(node1)

        const node0 = new Node(0)
        list.insertBefore(node1, node0)

        expect(list.head).toBe(node0)
        expect(node0.next).toBe(node1)
        expect(node1.prev).toBe(node0)
      })

    it('should insert a node before a target when the target is not the head',
      () => {
        // Build list: node1 -> node2
        const node1 = new Node(1)
        const node2 = new Node(2)
        list.push(node1)
        list.push(node2)

        // Insert node between node1 and node2: node1 -> node1_5 -> node2
        const node15 = new Node(1.5)
        list.insertBefore(node2, node15)

        expect(node1.next).toBe(node15)
        expect(node15.prev).toBe(node1)
        expect(node15.next).toBe(node2)
        expect(node2.prev).toBe(node15)
      })
  })

  describe('remove', () => {
    it('should remove a middle node', () => {
      // Build list: node1 -> node2 -> node3
      const node1 = new Node(1)
      const node2 = new Node(2)
      const node3 = new Node(3)
      list.push(node1)
      list.push(node2)
      list.push(node3)

      // Remove node2
      list.remove(node2)

      expect(node1.next).toBe(node3)
      expect(node3.prev).toBe(node1)
      expect(node2.prev).toBeNull()
      expect(node2.next).toBeNull()
      expect(list.head).toBe(node1)
      expect(list.tail).toBe(node3)
    })

    it('should remove the head node', () => {
      // Build list: node1 -> node2
      const node1 = new Node(1)
      const node2 = new Node(2)
      list.push(node1)
      list.push(node2)

      list.remove(node1)

      expect(list.head).toBe(node2)
      expect(node2.prev).toBeNull()
      expect(node1.next).toBeNull()
      expect(node1.prev).toBeNull()
    })

    it('should remove the tail node', () => {
      // Build list: node1 -> node2
      const node1 = new Node(1)
      const node2 = new Node(2)
      list.push(node1)
      list.push(node2)

      list.remove(node2)

      expect(list.tail).toBe(node1)
      expect(node1.next).toBeNull()
      expect(node2.prev).toBeNull()
      expect(node2.next).toBeNull()
    })
  })

  describe('swap', () => {
    it('should swap the data of two nodes', () => {
      // Build list: node1 -> node2
      const node1 = new Node(1)
      const node2 = new Node(2)
      list.push(node1)
      list.push(node2)

      list.swap(node1, node2)

      expect(node1.data).toBe(2)
      expect(node2.data).toBe(1)
    })
  })

  describe('fromArray', () => {
    it('should create a list from an array of elements', () => {
      const array = [1, 2, 3, 4]
      const linkedList = new List<number>()
      linkedList.fromArray(array)

      const result = [] as number[]
      linkedList.map((node) => result.push(node.data))

      expect(result).toEqual(array)
    })

    it('should handle an empty array', () => {
      const array: number[] = []
      const linkedList = new List<number>()
      linkedList.fromArray(array)

      expect(linkedList.head).toBeNull()
      expect(linkedList.tail).toBeNull()
    })

    it('should correctly set head and tail for a single element array', () => {
      const array = [42]
      const linkedList = new List<number>()
      linkedList.fromArray(array)

      expect(linkedList.head).not.toBeNull()
      expect(linkedList.tail).not.toBeNull()
      expect(linkedList.head).toBe(linkedList.tail)
      expect(linkedList.head?.data).toBe(42)
    })

    it('should correctly link nodes', () => {
      const array = [1, 2, 3]
      const linkedList = new List<number>()
      linkedList.fromArray(array)

      expect(linkedList.head?.data).toBe(1)
      expect(linkedList.head?.next?.data).toBe(2)
      expect(linkedList.head?.next?.next?.data).toBe(3)
      expect(linkedList.head?.next?.next?.next).toBeNull()

      expect(linkedList.tail?.data).toBe(3)
      expect(linkedList.tail?.prev?.data).toBe(2)
      expect(linkedList.tail?.prev?.prev?.data).toBe(1)
      expect(linkedList.tail?.prev?.prev?.prev).toBeNull()
    })
  })

  describe('toArray', () => {
    it('should return an array of all list nodes\' data', () => {
      const linkedList = new List<number>()
      linkedList.push(new Node(1))
      linkedList.push(new Node(2))
      linkedList.push(new Node(3))

      const result = linkedList.toArray()

      expect(result).toEqual([1, 2, 3])
    })

    it('should return an empty array when the list is empty', () => {
      const linkedList = new List<number>()

      const result = linkedList.toArray()

      expect(result).toEqual([])
    })

    it('should handle a list with a single node', () => {
      const linkedList = new List<number>()
      linkedList.push(new Node(42))

      const result = linkedList.toArray()

      expect(result).toEqual([42])
    })

    it('should correctly handle a list with multiple nodes', () => {
      const linkedList = new List<string>()
      linkedList.push(new Node('a'))
      linkedList.push(new Node('b'))
      linkedList.push(new Node('c'))

      const result = linkedList.toArray()

      expect(result).toEqual(['a', 'b', 'c'])
    })
  })

  describe('toString', () => {
    it('should return a concatenated string of JSON stringified node data',
      () => {
        const node1 = new Node({ value: 1 })
        const node2 = new Node({ value: 2 })
        list.push(node1)
        list.push(node2)

        const expectedString =
          `${JSON.stringify(node1.data)} ${JSON.stringify(node2.data)}`
        expect(list.toString()).toBe(expectedString)
      })

    it('should return an empty string for an empty list', () => {
      expect(list.toString()).toBe('')
    })
  })

  describe('map', () => {
    it('should iterate over each node and apply the iteratee function', () => {
      const node1 = new Node(1)
      const node2 = new Node(2)
      const node3 = new Node(3)
      list.push(node1)
      list.push(node2)
      list.push(node3)

      const values: number[] = []
      list.map((node) => values.push(node.data))

      expect(values).toEqual([1, 2, 3])
    })
  })
})
