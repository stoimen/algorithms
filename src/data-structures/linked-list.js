class Node {

  /**
   * constructs a double linked list node
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
   * creates a linked list
   */
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * @param {Object} node
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
   * pops from a linked list
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
}

module.exports = {Node, List}
