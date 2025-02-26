/**
 * Sorts a List using bubble sort algorithm
 * @module sort/Bubble
 * @type {Function}
 * @param {List} list - The unsorted list
 * @param {Function} predicate - Callback function defining how to compare two elements of the list
 * @throws {TypeError} If list or predicate is not provided
 */
module.exports = (list, predicate) => {
  if (!list || typeof predicate !== 'function') {
    throw new TypeError('Invalid arguments: list and predicate are required');
  }

  let left = list.head
  let swapped

  do {
    swapped = false
    let right = left

    while (right && right.next) {
      if (predicate(right, right.next)) {
        list.swap(right, right.next) // soft swap
        swapped = true
      }
      right = right.next
    }
    left = left.next
  } while (swapped)
}