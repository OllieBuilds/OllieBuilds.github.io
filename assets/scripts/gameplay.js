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
    return playerXwins;
  }else {
    playerOwins++;
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
    mathWinner *= array[i]+1;
  console.log(mathWinner);
  if(mathWinner === 6 || mathWinner === 28 || mathWinner === 45 || mathWinner === 80 || mathWinner === 162 || mathWinner === 105 || mathWinner === 120 || mathWinner === 504){
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
  playerXwins

};
