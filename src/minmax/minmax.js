function minmax(list) {
  var
    min = list[0],
    max = list[0],
    l = list.length,
    i = 0
  ;

  // odd or even
  if (l & 1) {
    i = 1;
  }

  for (; i < l; i+=2) {
    if (list[i] < list[i+1]) {
      if (list[i] < min) {
        min = list[i];
      }
      if (list[i+1] > max) {
        max = list[i+1];
      }
    } else {
      if (list[i] > max) {
        max = list[i];
      }
      if (list[i+1] < min) {
        min = list[i+1];
      }
    }
  }

  return [min, max];
}

module.exports = minmax;
