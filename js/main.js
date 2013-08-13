'use strict';

var app = (function () {
  var wait = [];
  var ready = false;

  return {
    onload: function () {
      var len = wait.length;
      var i;
      for (i = 0; i < len; i += 1) {
        wait[i]();
      }
      wait = null;
      ready = true;
      return this;
    },
    ready: function (fn) {
      if (ready) {
        return fn();
      }
      wait.push(fn);
      return this;
    }
  };
})();
