(function(root) {

  function sequential(list, item) {
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i] == item) {
        return i;
      }
    }

    return -1;
  };

  root.sequential = sequential;

})(typeof window === 'undefined'? module.exports: window);
