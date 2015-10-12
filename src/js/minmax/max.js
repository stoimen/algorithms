max = function(list) {
  var max = list[0];

  for (var i = 1, l = list.length; i < l; i++) {
    if (max < list[i]) {
      max = list[i];
    }
  }

  return max;
}

module.exports = max;
