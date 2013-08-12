'use strict';

jQuery(function ($) {

  var $conveyor = $('.header-conveyor');
  var $items = $conveyor.children('.header-conveyor-item');

  var left = 0;
  var len = $items.length * 3;
  var lock = false;
  var timer;

  $items.each(function () {
    var $this = $(this);
    $this.css({'background-image': 'url("' + $this.data('background') + '")'});
  });

  left = (len % 2 ? (len + 1) / 2 : len / 2) * -100;

  $conveyor.prepend($items.clone(), $items.clone());
  $conveyor.css({left: left + '%'});

  var next = function (done) {
    if (lock) {
      return;
    }
    lock = true;
    var hold = left;
    left -= 100;
    $conveyor.animate({left: left + '%' }, 500, function () {
      left = hold;
      var $item = $conveyor.children('.header-conveyor-item:first');
      $item.remove();
      $conveyor
        .css({left: left + '%'})
        .append($item);
      lock = false;
      done && done();
    });
  };

  var prev = function (done) {
    if (lock) {
      return;
    }
    lock = true;
    var hold = left;
    left += 100;
    $conveyor.animate({left: left + '%' }, 500, function () {
      left = hold;
      var $item = $conveyor.children('.header-conveyor-item:last');
      $item.remove();
      $conveyor
        .css({left: left + '%'})
        .prepend($item);
      lock = false;
      done && done();
    });
  };

  var play = function () {
    timer = setTimeout(function () {
      next(play);
    }, 5000);
  };

  var stop = function () {
    clearTimeout(timer);
  };
  
  $('.header-prev-btn').on('click', function () {
    prev();
    return false;
  });

  $('.header-next-btn').on('click', function () {
    next();
    return false;
  });

  $('#header')
    .on('mouseenter', function () {
      stop();
    })
    .on('mouseleave', function () {
      play();
    });

  play();

});
