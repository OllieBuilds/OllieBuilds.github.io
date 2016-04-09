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
  console.log("wins!");
  if(currentPlayer === "Player One"){
    playerXwins++;
    console.log(currentPlayer + " wins!");
  } else {
    playerOwins++;
    console.log(currentPlayer + " wins!");
  }
};

// Game Logic
const defined = function (array, identify){
    let indexValue = identify.charAt(6);
    array[+indexValue] = currentPlayer;
    console.log(array);
};

const winCases = function(array, id){
  console.log('win cases running');
  // for(let i = 0; i < array.length; i++){
  //   if(isPresent(array)){
  //     console.log(currentPlayer);
  //     return announceWinner(currentPlayer);
  //     }
  //   }
  defined(array, id);
  };

// const winCases = function () {
//   console.log($('#square0').text() + $('#square1').text());
//   for (let i = 0; i <= winCases.length; i++){
//   if (($('#square0').text() === $('#square1').text === $('#square2').text() )){
//     return announceWinner();
//   } else if ($('#square0').text() !== "" && ($('#square0').text() === $('#square3').text === $('#square6').text() )){
//     return announceWinner();
//   } else if ($('#square0').text() !== "" && ($('#square0').text() === $('#square4').text === $('#square8').text() )){
//     return announceWinner();
//   } else if ($('#square1').text() !== "" && ($('#square1').text() === $('#square4').text === $('#square7').text() )){
//     return announceWinner();
//   } else if ($('#square2').text() !== "" && ($('#square2').text() === $('#square5').text === $('#square8').text() )){
//     return announceWinner();
//   } else if ($('#square2').text() !== "" && ($('#square2').text() === $('#square4').text === $('#square6').text() )){
//     return announceWinner();
//   } else if ($('#square3').text() !== "" && ($('#square3').text() === $('#square4').text === $('#square5').text() )){
//     return announceWinner();
//   } else if ($('#square6').text() !== "" && ($('#square6').text() === $('#square7').text === $('#square8').text() )){
//     return announceWinner();
//   }
//   console.log('ran through logic');
// }
// };

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
    winCases(xArray, id);
  }else{
    $(this).text('O');
    let id = $(this).attr('id');
    // oArray.push(id);
    // console.log(gameArray);
    numTurn++;
    currentPlayer = 'O';
    winCases(oArray, id);
  }
});

module.exports = {
  announceWinner,
  winCases,

};
