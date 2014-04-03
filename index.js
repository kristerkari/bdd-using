'use strict';

function using(name, values, func) {
  var oldIt = window.it;
  for (var i = 0, len = values.length; i < len; i++) {
    window.it = function() {
      var args = Array.prototype.slice.call(arguments);
      args[0] += ' (with "' + name + '" using "' + values[i] + '")';
      oldIt.apply(this, args);
    };
    func.call(this, value);
  }
  window.it = oldIt;
}

module.exports = using;
