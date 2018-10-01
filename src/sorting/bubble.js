/**
 * Sorts a List using bubble sort algorithm
 * @module sort/Bubble
 * @type {Function}
 * @param {List} list unsorted array
 */
module.exports = (list) => {
  let left = list.head

  while (left) {
    let right = left.prev
    while (right) {
      if (right.data > right.next.data) {
        list.swap(right, right.next) // soft swap
      }
      right = right.prev
    }
    left = left.next
  }
}
