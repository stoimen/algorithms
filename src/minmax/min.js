min = function(list) {
  var min = list[0];

  for (var i = 1, l = list.length; i < l; i++) {
    if (min > list[i]) {
      min = list[i];
    }
  }

  return min;
}

module.exports = min;
