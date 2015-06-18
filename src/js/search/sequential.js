(function() {

  var root, sequential;

  if (typeof window == 'object' && this === window) {
    root = window;
  }
  else if (typeof global == 'object' && this === global) {
    root = global;
  }
  else {
    root = this;
  }

  sequential = function(list, item) {
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i] == item) {
        return i;
      }
    }

    return -1;
  };

  // Node.js
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = sequential;
  }
  // AMD / RequireJS
  else if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return sequential;
    });
  }
  // included directly via <script> tag
  else {
    root.sequential = sequential;
  }

}());
