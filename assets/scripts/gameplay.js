'use strict';

// const authApi = require('./auth/api');
// // const api = require('./auth/api');
// const authUi = require('./auth/ui');
//
let gameId;
let xArray = [];
let oArray = [];
let gameArray = [];
let patchVal;
let patchIndex;

// win counters
  let playerXwins = 0;
  let playerOwins = 0;
  let numTurn = 0;
  // let mathWinner = 1;


// announceWinner

const announceWinner = function (){
  console.log("announce wins!");
  if(numTurn % 2 === 0){
    playerXwins++;
    $('.square').addClass('unavailable');
    return playerXwins;
  }else {
    playerOwins++;
    $('.square').addClass('unavailable');
    return playerOwins++;
  }
};

// Game Logic
// const toMath = function(array) {
//   let mathWinner = 1;
//   for(let i = 0; i <array.length; i++){
//     mathWinner *= array[i];
//   }
//   return mathWinner;
// };

const winCases = function(array) {
  let mathWinner = 1;
  for(let i = 0; i <array.length; i++){
    mathWinner *= array[i]+5;
  console.log(mathWinner);
  if(mathWinner === 210 || mathWinner === 440 || mathWinner === 585 || mathWinner === 648 || mathWinner === 910 || mathWinner === 693 || mathWinner === 720 || mathWinner === 1716){
    announceWinner();
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
    xArray.push(toNum);
    patchVal = 'X';
    patchIndex = toNum;
    console.log(xArray);
    winCases(xArray);
    numTurn++;
  }else{
    $(this).text('O');
    $(this).addClass('unavailable');
    // let id = $(this).attr('id');
    let integer = $(this).attr('id').charAt(6);
    let toNum = parseInt(integer);
    oArray.push(toNum);
    patchVal = 'O';
    patchIndex = toNum;
    console.log(oArray);
    winCases(oArray);
    numTurn++;
  }
});

module.exports = {
  announceWinner,
  winCases,
  playerOwins,
  playerXwins,
  xArray,
  oArray,
  gameId,
  gameArray,
  patchVal,
  patchIndex,
};
