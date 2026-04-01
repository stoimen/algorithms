/**
 * Sorts an array in ascending order using the heap sort algorithm.
 *
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} The same array instance, sorted in ascending order.
 * @throws {TypeError} If arr is not an array.
 */
function heapsort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Invalid argument: arr must be an array')
  }

  const n = arr.length

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i -= 1) {
    heapify(arr, n, i)
  }

  // Extract elements from heap one by one
  for (let end = n - 1; end > 0; end -= 1) {
    swap(arr, 0, end)
    heapify(arr, end, 0)
  }

  return arr
}

function heapify(arr, heapSize, rootIndex) {
  let largest = rootIndex
  const left = 2 * rootIndex + 1
  const right = 2 * rootIndex + 2

  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== rootIndex) {
    swap(arr, rootIndex, largest)
    heapify(arr, heapSize, largest)
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

module.exports = heapsort
