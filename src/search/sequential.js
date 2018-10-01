/**
 * Returns a boolean for given object of class Node
 * @typedef Predicate
 * @type {Function}
 * @param {Node} node
 * @returns {Boolean}
 * @example
 * (node) => node.data === obj
 */

/**
 * Sequential search looks for an item in a list by exploring all the items one by one. It's good when the list is not sorted.
 * @module search/Sequential
 * @type {Function}
 * @param {List} list
 * @param {Function} callback Called on each element
 * @returns {Node|null} The Node if it's in the list or null otherwise
 */
module.exports = (list, predicate) => {
  let p = list.head

  while (p) {
    if (predicate(p)) {
      return p
    }
    p = p.next
  }

  return null
}
