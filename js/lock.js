'use strict';

// 鬼島公務員專用腦包鎖

(function (window) {

  var s = false;

  if (window.localStorage) {
    s = localStorage.getItem('pw');
  }
  console.log(localStorage.getItem('pw'));

  if (s) {
    return;
  }

  if (prompt('輸入密碼') === 'design-taipei') {
    if (window.localStorage) {
      window.localStorage.setItem('pw', true);
    }
  } else {
    window.location = 'http://poying.ghostisland.tw/';
  }

})(this);
