module.exports = (list) => {
  let i = 0, l = list.length

  while (l > i++) {
    let j = i
    while (j--) {
      if (list[j] > list[j+1]) {
        [list[j], list[j+1]] = [list[j+1], list[j]]
      }
    }
  }
  return list
}