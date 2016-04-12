'use strict';

const app = require('../app-data.js');
// const users = require('../users');
const gameplay = require('../gameplay');

const success = (data) => {
  console.log(data);
  console.log('success');
};

const JoinSuccess = (data) => {
  console.log(data);
  console.log('success');
  $('#join-game').addClass('hidden');
  $('#new-game').removeClass('hidden');
};

const pwSuccess = () => {
  console.log('Password has been changed');
  $('#pw-change-success').removeClass('hidden');
};

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


const signInSuccessTwo = (data) => {
    app.user2 = data.user;
    app.user2.authToken = data.user.token;
    console.log( app.user2);
    $('#sign-in-two').addClass('hidden');
    $('#join-game').removeClass('hidden');
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
  console.log(data);
  gameplay.gameId = data.game.id;
  console.log(gameplay.gameId);
  $('#new-game').addClass('hidden');
  $('#sign-in-two').removeClass('hidden');
  gameplay.gameArray = gameplay.newGameArray;
};

const getSuccess = (data) => {
  console.log('get succ');
  console.log(data);
};



checkUser();

module.exports = {
  failure,
  success,
  pwSuccess,
  signInSuccess,
  signInSuccessTwo,
  signOutSuccess,
  checkUser,
  newGameSuccess,
  JoinSuccess,
  getSuccess,
};
