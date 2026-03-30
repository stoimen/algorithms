/**
 * Sorts an array using quicksort.
 *
 * @param {Array<*>} arr - The array to sort.
 * @param {(a: *, b: *) => number} [comparator] -
 * A comparator function like Array.prototype.sort.
 * @returns {Array<*>} A new sorted array.
 * @throws {TypeError} If arr is not an array or comparator is invalid.
 */
function quicksort(arr, comparator = defaultComparator) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Invalid argument: arr must be an array')
  }

  if (typeof comparator !== 'function') {
    throw new TypeError('Invalid argument: comparator must be a function')
  }

  const copy = arr.slice()
  if (copy.length < 2) {
    return copy
  }

  quicksortInPlace(copy, 0, copy.length - 1, comparator)
  return copy
}

function quicksortInPlace(arr, left, right, comparator) {
  if (left >= right) {
    return
  }

  const pivotIndex = partition(arr, left, right, comparator)

  quicksortInPlace(arr, left, pivotIndex - 1, comparator)
  quicksortInPlace(arr, pivotIndex + 1, right, comparator)
}

function partition(arr, left, right, comparator) {
  const pivot = arr[right]
  let i = left

  for (let j = left; j < right; j += 1) {
    if (comparator(arr[j], pivot) <= 0) {
      swap(arr, i, j)
      i += 1
    }
  }

  swap(arr, i, right)
  return i
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function defaultComparator(a, b) {
  if (a < b) {
    return -1
  }

  if (a > b) {
    return 1
  }

  return 0
}

module.exports = quicksort
