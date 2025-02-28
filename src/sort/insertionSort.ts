import List from '../data-structures/linkedList'
import Node from '../data-structures/node'

/**
 * Sorts a linked list using the insertion sort algorithm.
 * The algorithm iterates over the list, and for each node (starting from the second),
 * finds the correct sorted position in the already-sorted portion (to its left) and
 * re-inserts the node there.
 *
 * @param list - The linked list to sort.
 * @param predicate - 
 * A comparison function that returns true if the first node should come after the second.
 * For example, (a, b) => a.data > b.data will sort numbers in ascending order.
 * @throws {TypeError} If the list or predicate is not provided or invalid.
 */
function insertionSort<T>(
  list: List<T>,
  predicate: (a: Node<T>, b: Node<T>) => boolean
): void {
  if (!list || typeof predicate !== 'function') {
    throw new TypeError('Invalid arguments: list and predicate are required')
  }

  // Start from the second node because the first node is already "sorted"
  let current: Node<T> | null = list.head ? list.head.next : null

  while (current) {
    // Save a reference to the next node, as current may be moved
    const nextCurrent = current.next
    const keyNode = current

    // Find the proper position in the sorted portion (nodes before keyNode)
    let sortedPosition: Node<T> | null = keyNode.prev
    while (sortedPosition && predicate(sortedPosition, keyNode)) {
      sortedPosition = sortedPosition.prev
    }

    // If the node is not already in the correct spot, reposition it.
    // (keyNode.prev !== sortedPosition) indicates that keyNode must be moved.
    if (keyNode.prev !== sortedPosition) {
      // Remove keyNode from its current position.
      list.remove(keyNode)

      if (sortedPosition === null) {
        // Insert at the beginning: keyNode becomes the new head.
        if (list.head) {
          list.insertBefore(list.head, keyNode)
        } else {
          // Fallback: if list is empty, push keyNode (should not happen since keyNode was in list)
          list.push(keyNode)
        }
      } else {
        // Otherwise, insert keyNode right after sortedPosition.
        list.insertAfter(sortedPosition, keyNode)
      }
    }

    // Continue with the next node in the original order.
    current = nextCurrent
  }
}

export default insertionSort