class Node {

  /**
   * Creates a Node with two pointers (next and prev) and data.
   * @param {*} data anything
   */
  constructor(data = null) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class List {

  /**
   * Creates an empty List
   */
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * Pushes a Node to the List
   * @param {Node} node
   */
  push(node) {
    if (this.head === null) {
      this.head =
      this.tail = node
    } else {
      let t = this.tail
      t.next = node
      node.prev = t
      this.tail = node
    }
  }

  /**
   * Pops a Node from the List
   * @returns {Node} the popped element
   */
  pop() {
    let t = this.tail
    this.tail = this.tail.prev

    if (this.tail === null) {
      this.head = this.tail
    }

    return t
  }

  /**
   * Calls iteratee on each Node of the List. Alters the Node.
   * @param {Iteratee} iteratee
   */
  map(iteratee) {
    let p = this.head

    while (p) {
      iteratee(p)
      p = p.next
    }
  }

  /**
   * Returns all list nodes' data concatenated into a single string
   * @returns {String}
   */
  toString() {
    let items = []
    this.map((node) => items.push(JSON.stringify(node.data)))

    return items.join(' ')
  }
}

module.exports = {Node, List}
