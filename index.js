function using(name, values, func) {
  var oldIt = it;
  for (var i = 0, len = values.length; i < len; i++) {
    it = function() {
      var args = Array.prototype.slice.call(arguments);
      args[0] += ' (with "' + name + '" using "' + values[i] + '")';
      oldIt.apply(this, args);
    };
    func.call(this, values[i]);
  }
  it = oldIt;
}

if (typeof exports == "object") {
  module.exports = using;
}
