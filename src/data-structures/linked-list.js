class List {
  /**
   * Creates an empty List
   */
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * Inserts a node after target
   *
   * @param {Node} target
   * @param {Node} node
   */
  insertAfter(target, node) {
    if (target && target.next) {
      let _p = target.next

      node.next = target.next
      node.prev = target

      target.next = node
      _p.prev = node

      return node
    } else {
      return this.push(node)
    }
  }

  /**
   * Inserts a node before target
   *
   * @param {Node} target
   * @param {Node} node
   */
  insertBefore(target, node) {
    if (!target) {
      return this.push(node)
    }

    if (!target.prev) {
      node.next = target
      target.prev = node
      this.head = node

      return node
    }

    let _p = target.prev

    node.prev = target.prev
    node.next = target

    target.prev = node
    _p.next = node

    return node
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
   * Pushes a Node to the end of the List
   * @param {Node} node
   */
  push(node) {
    if (this.head === null) {
      this.head = this.tail = node
    } else {
      let _t = this.tail
      _t.next = node
      node.prev = _t
      this.tail = node
    }

    return node
  }

  /**
   * removes a Node from the List
   * @param {Node} node
   */
  remove(node) {
    let _prev = node.prev
    let _next = node.next

    _prev.next = _next
    _next.prev = _prev

    node.prev = node.next = null

    return node
  }

  /**
   * Implements a soft swap of two elements. Actual objects are the same just
   * their 'data' property is swapped.
   * @param {Node} left
   * @param {Node} right
   */
  swap(left, right) {
    ;[left.data, right.data] = [right.data, left.data]
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

module.exports = List
