'use strict';

// const app = require('./auth/events');
// const api = require('./auth/api');
// const ui = require('./auth/ui');
//

// win counters
  let playerXwins = 0;
  let playerOwins = 0;
  let numTurns = 0;


// announceWinner

const announceWinner = function (who){
  console.log(who + "wins!");
  // un-hide html element
  let winner = who;
  if(winner === 'X'){
    playerXwins++;
    console.log(playerXwins);
  } else if (winner === 'O') {
    playerOwins++;
    console.log(playerOwins);
  }
};

// Game Logic

const winCases = function (player) {
  if (($('#square0').text !== "" && ($('#square0').text === $('square1').text === $('square2').text )) ||
      ($('#square0').text !== "" && ($('#square0').text === $('square3').text === $('square6').text )) ||
      ($('#square0').text !== "" && ($('#square0').text === $('square4').text === $('square8').text )) ||
// square1
      ($('#square1').text !== "" && ($('#square1').text === $('square4').text === $('square7').text )) ||
// square2
      ($('#square2').text !== "" && ($('#square2').text === $('square5').text === $('square8').text )) ||
      ($('#square2').text !== "" && ($('#square2').text === $('square4').text === $('square6').text )) ||
//square3
      ($('#square3').text !== "" && ($('#square3').text === $('square4').text === $('square5').text )) ||
// square6
      ($('#square6').text !== "" && ($('#square6').text === $('square7').text === $('square8').text ))
) {
    announceWinner(player);}
};
