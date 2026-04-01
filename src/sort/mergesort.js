/**
 * Sorts a linked list using the merge sort algorithm.
 *
 * @param {import('../data-structures/linkedList').default<any>} list - The linked list to sort.
 * @param {(a: import('../data-structures/node').default<any>, b: import('../data-structures/node').default<any>) => boolean} predicate
 *  A comparison function that returns true when node a should be placed after node b.
 * @throws {TypeError} If list or predicate is invalid.
 */
function mergeSort(list, predicate) {
  if (!list || typeof predicate !== 'function') {
    throw new TypeError('Invalid arguments: list and predicate are required')
  }

  if (!list.head || !list.head.next) {
    return
  }

  list.head = sortSubList(list.head, predicate)

  // Rebuild tail pointer after sorting.
  let tail = list.head
  while (tail && tail.next) {
    tail = tail.next
  }
  list.tail = tail
}

function sortSubList(head, predicate) {
  if (!head || !head.next) {
    if (head) {
      head.prev = null
    }
    return head
  }

  const middle = split(head)
  const left = sortSubList(head, predicate)
  const right = sortSubList(middle, predicate)

  return merge(left, right, predicate)
}

function split(head) {
  let slow = head
  let fast = head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  const secondHalf = slow.next
  slow.next = null

  if (secondHalf) {
    secondHalf.prev = null
  }

  return secondHalf
}

function merge(left, right, predicate) {
  if (!left) {
    return right
  }
  if (!right) {
    return left
  }

  let mergedHead = null
  let mergedTail = null

  while (left && right) {
    const shouldTakeRight = predicate(left, right)
    const nextNode = shouldTakeRight ? right : left

    if (shouldTakeRight) {
      right = right.next
    } else {
      left = left.next
    }

    nextNode.prev = mergedTail
    nextNode.next = null

    if (!mergedHead) {
      mergedHead = nextNode
      mergedTail = nextNode
    } else {
      mergedTail.next = nextNode
      mergedTail = nextNode
    }
  }

  let remainder = left || right
  while (remainder) {
    const next = remainder.next
    remainder.prev = mergedTail
    remainder.next = null

    if (!mergedHead) {
      mergedHead = remainder
      mergedTail = remainder
    } else {
      mergedTail.next = remainder
      mergedTail = remainder
    }

    remainder = next
  }

  return mergedHead
}

module.exports = mergeSort
module.exports.default = mergeSort
