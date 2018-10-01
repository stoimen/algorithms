/**
 * Sorts a List using insertion sort algorithm
 * @module sort/Insertion
 * @type {Function}
 * @param {List} list unsorted array
 */
module.exports = (list, predicate) => {
  let left = list.head

  while (left) {
    let right = left.prev
    while (right) {
      if (predicate(right, left)) {
        list.swap(right, left) // soft swap
      }
      right = right.prev
    }
    left = left.next
  }
}
