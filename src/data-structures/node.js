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
}

module.exports = Node
