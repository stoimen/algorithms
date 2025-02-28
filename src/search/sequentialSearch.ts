import List from '../data-structures/linkedList'
import Node from '../data-structures/node'

/**
 * A predicate function that checks whether a given node meets a condition.
 * @template T - The type of data stored in the node.
 * @param node - The node to evaluate.
 * @returns True if the node meets the condition otherwise, false.
 */
export type Predicate<T> = (node: Node<T>) => boolean

/**
 * Performs a sequential search on a linked list.
 *
 * This function traverses the linked list one node at a time,
 * applying the provided predicate to each node. It returns the first node
 * for which the predicate returns true. If no node matches, it returns null.
 *
 * @template T - The type of data stored in the nodes.
 * @param list - The linked list to search through.
 * @param predicate - A function that determines whether a node satisfies the search condition.
 * @returns The first node matching the predicate, or null if no match is found.
 */
function sequentialSearch<T>(list: List<T>, predicate: Predicate<T>): Node<T> | null {
  let currentNode = list.head

  while (currentNode) {
    if (predicate(currentNode)) {
      return currentNode
    }
    currentNode = currentNode.next
  }

  return null
}

export default sequentialSearch