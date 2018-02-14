module.exports = (a) => {

  for (let i = 1; i < a.length; i++) {
    let k = a[i], j = i

    while (j-- && a[j] > k) {
      a[j + 1] = a[j]
    }
    a[j + 1] = k
  }

  return a
}
