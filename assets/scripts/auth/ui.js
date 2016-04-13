'use strict';

const app = require('../app-data.js');
// const users = require('../users');
const gameplay = require('../gameplay');

const success = (data) => {
  console.log(data);
  console.log('success');
};

const pwSuccess = () => {
  console.log('Password has been changed');
  $('#pw-change-success').removeClass('hidden');
};

// const playerTwoSuccess = () => {
//   console.log('Player Two has logged-in');
//   $('#new-game').removeClass('unavailable');
// };
let gameId;

const failure = (error) => {
  console.error(error);
};


const signInSuccess = (data) => {
    app.user1 = data.user;
    app.user1.authToken = data.user.token;
    console.log('user 1' + app.user1);
    $('#register').addClass('hidden');
    $('#choose').removeClass('hidden');
  };


const signInTwoSuccess = (data) => {
    app.user2 = data.user;
    app.user2.authToken = data.user.token;
    console.log( "2 in success");
    $('#sign-in-two').addClass('hidden');
    $('#join-game').removeClass('hidden');
    console.log(data);
};

const signOutSuccess = () => {
  app.user = null;
  console.log('You successfully logged out.');
};

const checkUser = function checkUser () {
  if (app.user) {
    console.log('logged in');
  } else {
    console.log('no user');
  }
};

const newGameSuccess = (data) => {
  console.log("New game success!");
  $('#new-game').addClass('hidden');
  $('#sign-in-two').removeClass('hidden');
  gameplay.gameArray = gameplay.newGameArray;
  app.gameId = data.game.id;
  console.log(app.gameId + "new game log");
};

const getSuccess = (data) => {
  console.log('get succ');
  console.log(data);
};

const JoinSuccess = (data) => {
  console.log(data);
  console.log('join success');
  // gameId = data.game.id;
  // let user2 = data.user;
  // user2.authToken = data.user.token;
  // console.log( app.user2);
  $('#join-game').addClass('hidden');
  $('#new-game').removeClass('unavailable');
};


checkUser();

module.exports = {
  failure,
  success,
  pwSuccess,
  signInSuccess,
  signOutSuccess,
  checkUser,
  newGameSuccess,
  JoinSuccess,
  getSuccess,
  signInTwoSuccess,
  gameId,
};
