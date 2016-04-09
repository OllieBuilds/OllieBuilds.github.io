'use strict';

// const app = require('./auth/events');
// const api = require('./auth/api');
// const ui = require('./auth/ui');
//

let xArray = ["", "", "", "", "", "", "", "", ""];
let oArray = ["", "", "", "", "", "", "", "", ""];

// win counters
  let playerXwins = 0;
  let playerOwins = 0;
  let numTurn = 0;
  let currentPlayer;



// announceWinner

const announceWinner = function (){
  console.log("annouce wins!");
  if(numTurn % 2 === 0){
    playerXwins++;
    return playerXwins;
  }else {
    return playerOwins++;
  }
};

// Game Logic

const winCases = function(array){
  console.log('win cases running');
  for (let i = 0; i < array.length; i++){
  // global --> top row 0
if (array[0] !== ''){
  // top row: horizontal
  if(array[0] === array[1] === array[2]){
announceWinner();
  }
  // top row: vertical
  else if(array[0] === array[3] === array[6]){
    return announceWinner();
  }
  // top left diagonal
  else if(array[0] === array[4] === array[8]){
    return announceWinner();
  }
  //global --> 1
}else if(array[1] !== ''){
  // center column vertical
  if(array[1] === array[4] === array[7]){
    return announceWinner();
  }
  // global --> 2
}else if(array[2] !== ''){
  // right column vertical
  if(array[2] === array[5] === array[8]){
    return announceWinner();
  }
  // right corner diagonal
  if(array[2] === array[4] === array[6]){
    return announceWinner();
  }
  // global --> 3
}else if(array[3] !== ''){
  // middle row horizontal
  if(array[3] === array[4] === array[5]){
    return announceWinner();
  }
  // global --> 6
}else if(array[6] !== ''){
  // bottom row horizontal
  if(array[6] === array[7] === array[8]){
    return announceWinner();
  }
  // global
  }
 }  // end function
 console.log('ran winCases');
};

const defined = function (array, identify){
    let indexValue = identify.charAt(6);
    array[+indexValue] = currentPlayer;
    console.log(array);
    let newArray = array;
    console.log(newArray);
    winCases(newArray);
};


// Player move function
$('.square').on('click', function(){
  if(numTurn % 2 === 0){
    $(this).text('X');
    let id = $(this).attr('id');
    // xArray.push(id);
    // console.log(gameArray);
    numTurn++;
    currentPlayer = 'X';
    console.log(xArray);
    defined(xArray, id);
  }else{
    $(this).text('O');
    let id = $(this).attr('id');
    // oArray.push(id);
    // console.log(gameArray);
    numTurn++;
    currentPlayer = 'O';
    defined(oArray, id);
  }
});

module.exports = {
  announceWinner,
  winCases,
  defined,
  playerOwins,
  playerXwins

};
