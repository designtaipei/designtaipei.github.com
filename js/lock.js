'use strict';

// 鬼島公務員專用腦包鎖

(function (window) {

  if (prompt('輸入密碼') !== 'ghostisland') {
    window.location = 'http://poying.ghostisland.tw/';
  }

})(this);
