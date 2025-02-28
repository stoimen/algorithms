import Node from './node'

/**
 * Represents a doubly linked list.
 * @class
 */
class List<T> {
  head: Node<T> | null
  tail: Node<T> | null

  /**
   * Creates an empty List.
   */
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * Inserts a node after the target node.
   * @param {Node<T>} target - The target node to insert after.
   * @param {Node<T>} node - The node to insert.
   * @returns {Node<T>} The inserted node.
   */
  insertAfter(target: Node<T>, node: Node<T>): Node<T> {
    if (target.next) {
      const nextNode = target.next
      node.next = nextNode
      node.prev = target
      target.next = node
      nextNode.prev = node
    } else {
      this.push(node)
    }

    return node
  }

  /**
   * Inserts a node before the target node.
   * @param {Node<T>} target - The target node to insert before.
   * @param {Node<T>} node - The node to insert.
   * @returns {Node<T>} The inserted node.
   */
  insertBefore(target: Node<T>, node: Node<T>): Node<T> {
    if (!target.prev) {
      node.next = target
      target.prev = node
      this.head = node
    } else {
      const prevNode = target.prev
      node.prev = prevNode
      node.next = target
      target.prev = node
      prevNode.next = node
    }

    return node
  }

  /**
   * Calls iteratee on each Node of the List. Alters the Node.
   * @param {(node: Node<T>) => void} iteratee - The function to call on each node.
   */
  map(iteratee: (node: Node<T>) => void): void {
    let currentNode = this.head
    while (currentNode) {
      iteratee(currentNode)
      currentNode = currentNode.next
    }
  }

  /**
   * Pushes a Node to the end of the List.
   * @param {Node<T>} node - The node to push.
   * @returns {Node<T>} The pushed node.
   */
  push(node: Node<T>): Node<T> {
    if (this.head === null) {
      this.head = this.tail = node
    } else {
      const tailNode = this.tail
      if (tailNode) {
        tailNode.next = node
        node.prev = tailNode
        this.tail = node
      }
    }

    return node
  }

  /**
   * Removes a Node from the List.
   * @param {Node<T>} node - The node to remove.
   * @returns {Node<T>} The removed node.
   */
  remove(node: Node<T>): Node<T> {
    const prevNode = node.prev
    const nextNode = node.next

    if (prevNode) {
      prevNode.next = nextNode
    } else {
      this.head = nextNode
    }

    if (nextNode) {
      nextNode.prev = prevNode
    } else {
      this.tail = prevNode
    }

    node.prev = node.next = null

    return node
  }

  /**
   * Implements a soft swap of two elements. Actual objects are the same, just
   * their 'data' property is swapped.
   * @param {Node<T>} left - The first node.
   * @param {Node<T>} right - The second node.
   */
  swap(left: Node<T>, right: Node<T>): void {
    [left.data, right.data] = [right.data, left.data]
  }

  /**
   * Fills the List with data from an array.
   * @param {T[]} array - The array to fill the list with.
   */
  fromArray(array: T[]): void {
    array.forEach((data) => this.push(new Node(data)))
  }

  /**
   * @returns {T[]} An array of all list nodes' data.
   */
  toArray(): T[] {
    const array: T[] = []
    this.map((node) => array.push(node.data))
    return array
  } 

  /**
   * Returns all list nodes' data concatenated into a single string.
   * @returns {String} The concatenated string of all nodes' data.
   */
  toString(): string {
    const items: string[] = []
    this.map((node) => items.push(JSON.stringify(node.data)))
    return items.join(' ')
  }
}

export default List