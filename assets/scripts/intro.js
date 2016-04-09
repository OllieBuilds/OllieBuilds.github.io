'use strict';

$('#trip').on('click', function() {
  $('#land').addClass('hidden');
    console.log('test');
  $('#register').removeClass('hidden');
});

$('#begin').on('click', function() {
  $('#register').addClass('hidden');
  $('#choose').removeClass('hidden');
});

$('#change-pw').on('click', function() {
  $('#pw-change-success').removeClass('hidden');
});
