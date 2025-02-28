import List from '../data-structures/linkedList';
import Node from '../data-structures/node';

/**
 * Sorts a List using bubble sort algorithm.
 * @module sort/Bubble
 * @type {Function}
 * @param {List<T>} list - The unsorted list.
 * @param {(a: Node<T>, b: Node<T>) => boolean} predicate - Callback function defining how to compare two elements of the list.
 * @throws {TypeError} If list or predicate is not provided.
 */
function bubbleSort<T>(list: List<T>, predicate: (a: Node<T>, b: Node<T>) => boolean): void {
  if (!list || typeof predicate !== 'function') {
    throw new TypeError('Invalid arguments: list and predicate are required');
  }

  let left = list.head
  let swapped: boolean

  do {
    swapped = false
    let right = left

    while (right && right.next) {
      if (predicate(right, right.next)) {
        // soft swap (only data is swapped, no actual objects)
        list.swap(right, right.next) 
        swapped = true
      }
      right = right.next
    }

    left = left?.next || null
  } while (swapped)
}

export default bubbleSort