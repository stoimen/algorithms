class Node {
  /**
   * Creates a Node with two pointers (next and prev) and data
   * @param {*} data anything
   */
  constructor(data = null) {
    this.data = data
    this.next = null
    this.prev = null
  }

  /**
   * inserts after the Node
   * @param {Node} node
   */
  insertAfter(node) {
    let next = node.next

    this.next = next
    this.prev = node
    node.next = this
  }

  /**
   *
   * @param {Node} node
   */
  insertBefore(node) {
    let prev = node.prev

    this.next = node
    this.prev = prev
    node.prev = this
  }
}

module.exports = Node
