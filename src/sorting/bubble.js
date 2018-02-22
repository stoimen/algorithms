/**
 * Sorts an array with bubble sort. Returns the sorted input array.
 * @module sort/Bubble
 * @type {Function}
 * @param {Array} list - unsorted array
 * @returns {Array} sorted array
 */
module.exports = (a) => {
  let i = 0, l = a.length

  while (l > i++) {
    let j = i
    while (j--) {
      if (a[j] > a[j+1]) {
        [a[j], a[j+1]] = [a[j+1], a[j]]
      }
    }
  }
  return a
}
