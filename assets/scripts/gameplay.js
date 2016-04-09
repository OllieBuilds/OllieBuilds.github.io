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




// announceWinner

const announceWinner = function (){
  console.log("wins!");
  if(numTurn % 2 === 0){
    playerXwins++;
    return playerXwins;
  } else {
    playerOwins++;
    console.log(playerOwins);
  }
};

// Game Logic
const winCases = function(array){
  console.log('win cases running');
  for(let i = 0; i < array.length; i++){

  }

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
    xArray.push(id);
    // console.log(gameArray);
    numTurn++;
    winCases(xArray);
  }else{
    $(this).text('O');
    let id = $(this).attr('id');
    oArray.push(id);
    // console.log(gameArray);
    numTurn++;
    winCases(oArray);
  }
});

module.exports = {
  announceWinner,
  winCases,

};
