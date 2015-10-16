sequential = function(list, item) {
  for (var i = 0, l = list.length; i < l; i++) {
    if (list[i] == item) {
      return i;
    }
  }

  return -1;
};

module.exports = sequential;
