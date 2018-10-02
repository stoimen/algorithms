/**
 * Sorts a List using bubble sort algorithm
 * @module sort/Bubble
 * @type {Function}
 * @param {List} list unsorted array
 * @param {Function} predicate - callback function defining how to compare two elements of the list
 */
module.exports = (list, predicate) => {
  let left = list.head

  while (left) {
    let right = left.prev
    while (right) {
      if (predicate(right, right.next)) {
        list.swap(right, right.next) // soft swap
      }
      right = right.prev
    }
    left = left.next
  }
}
