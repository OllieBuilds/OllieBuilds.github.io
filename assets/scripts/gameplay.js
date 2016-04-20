'use strict';

// const app = require('./app-data');
const authApi = require('./auth/api');
const authUi = require('./auth/ui');
// const ui = require('./auth/ui');
//
let gameId;
let xArray = [];
let oArray = [];
let index;
let value;
let gameOver = false;
// win counters
  let playerXwins = 0;
  let playerOwins = 0;
  let numTurn = 0;


// announceWinner
const announceWinner = function (){
  console.log("announce wins!");
  if(numTurn % 2 === 0){
    playerXwins++;
    $('.square').addClass('unavailable');
    $('#display-win').text('Player X wins');
    return playerXwins;
  }else {
    playerOwins++;
    $('.square').addClass('unavailable');
    $('#display-win').text('Player O wins');
    return playerOwins++;
  }
};

// Game Logic
const winCases = function(array) {
  let mathWinner = 1;
  for(let i = 0; i <array.length; i++){
    mathWinner *= array[i]+5;
  console.log(mathWinner);
  if(numTurn >= 8 && gameOver === false) {
    $('#cat').removeClass('hidden');
  }else if(mathWinner === 210 || mathWinner === 440 || mathWinner === 585 || mathWinner === 648 || mathWinner === 910 || mathWinner === 693 || mathWinner === 720 || mathWinner === 1716){
    announceWinner();
    gameOver = true;
  }
}
};


// Player move function
$('.square').on('click', function(event){
  console.log($(this));
  event.preventDefault();
  if(numTurn % 2 === 0){
    $(this).text('X');
    $(this).addClass('unavailable');
    let integer = $(this).attr('id').charAt(6);
    let toNum = parseInt(integer);
    index = toNum;
    value = "X";
    xArray.push(toNum);
    console.log(xArray);
    winCases(xArray);
    numTurn++;
  }else{
    $(this).text('O');
    $(this).addClass('unavailable');
    // let id = $(this).attr('id');
    let integer = $(this).attr('id').charAt(6);
    let toNum = parseInt(integer);
    index = toNum;
    value = "O";
    oArray.push(toNum);
    console.log(oArray);
    winCases(oArray);
    numTurn++;
  }
  console.log(index + "  " + value);
  authApi.updateGame(authUi.success, authUi.failure, index, value, gameOver);
});

module.exports = {
  announceWinner,
  winCases,
  playerOwins,
  playerXwins,
  xArray,
  oArray,
  gameId,
  index,
  value,
  gameOver,
};
