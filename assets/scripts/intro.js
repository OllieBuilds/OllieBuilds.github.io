'use strict';

const gameplay = require('./gameplay');

$('#trip').on('click', function() {
  $('#land').addClass('hidden');
  $('#register').removeClass('hidden');
});

// $('#sign-in').on('submit', function() {
// if()
//   $('#register').addClass('hidden');
//   $('#choose').removeClass('hidden');
// });

$('#change-pw').on('click', function() {
  $('#pw-change-success').removeClass('hidden');
});

$('#new-game').on('click', function() {
  $('#choose').addClass('hidden');
  $('#overlay').addClass('hidden');
  $('#nav').removeClass('hidden');
  $('#game-board').removeClass('hidden');
  $('.square').removeClass('unavailable');
});

$('#li-new-game').on('click', function() {
  $('.square').removeClass('unavailable');
  gameplay.xArray.length = 0;
  gameplay.oArray.length = 0;
  $('.square').text('');
});
