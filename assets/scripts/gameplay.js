'use strict';

// const app = require('./auth/events');
// const api = require('./auth/api');
// const ui = require('./auth/ui');
//

let xArray = [];
let oArray = [];

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
$('.square').on('click', function(){
  if(numTurn % 2 === 0){
    $(this).text('X');
    // xArray[$(this.attr('id')] = $(this).attr('id');
    // xArray.push($(this).attr('id').charAt(6).parseInt());
    let integer = $(this).attr('id').charAt(6);
    let toNum = parseInt(integer);
    xArray.push(toNum);
    // toMath(xArray);
    console.log(xArray);
    winCases(xArray);
    numTurn++;
  }else{
    $(this).text('O');
    // let id = $(this).attr('id');
    let integer = $(this).attr('id').charAt(6);
    let toNum = parseInt(integer);
    oArray.push(toNum);
    // toMath(oArray);
    console.log(oArray);
    winCases(oArray);
    numTurn++;
  }
});

module.exports = {
  announceWinner,
  winCases,
  // defined,
  playerOwins,
  playerXwins,
  xArray,
  oArray,

};
