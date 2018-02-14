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
