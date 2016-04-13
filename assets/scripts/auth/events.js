'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');
const gameplay = require('../gameplay');

// let playerOne;
// let playerTwo;

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.signUp(authUi.success, authUi.failure, data);
  });

  $('#sign-in').on('submit', function (event){
    event.preventDefault();
  // two users
    let data = getFormFields(this);
    // playerOne = app.user;
    console.log(this);
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });

  $('#player-two').on('submit', function (event){
    event.preventDefault();
  // two users
    let data = getFormFields(this);
    // playerOne = app.user;
    authApi.signInTwo(authUi.signInTwoSuccess, authUi.failure, data);
    console.log('signed in');
    // authApi.joinGame(authUi.JoinSuccess, authUi.failure);
  });

  $('#join').on('submit', function (event) {
    event.preventDefault();
    authApi.joinGame(authUi.JoinSuccess, authUi.failure);
  });

  $('#sign-out').on('submit', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  // Game functions
  $('#new-game').on('submit', function(event) {
    $('#register').addClass('hidden');
    $('#choose').removeClass('hidden');
    // $('#player-two').removeClass('hidden');
    event.preventDefault();
    authApi.newGame(authUi.newGameSuccess, authUi.failure);
    $('td').removeClass('playerone').removeClass('playertwo').text(null);
    // for(let i = 0; i < gameplay.gameArray.length; i++) {
    //   gameplay.gameArray[i] = null;
    // }
  });

  // $('#player-two').on('submit', function(event){
  //   event.preventDefault();
  //   authApi.joinGame(authUi.JoinSuccess, authUi.failure);
  // });

  $('#change-pw').on('submit', function(event){
    event.preventDefault();
    // authApi.updateGame(authUi.success, authUi.failure);
    let data = getFormFields(this);
    authApi.changePassword(authUi.pwSuccess, authUi.failure, data);
  });

  $('#getId').on('submit', function(event){
    console.log('getId');
    event.preventDefault();
    authApi.getId(authUi.getSuccess, authUi.failure);
  });

};


module.exports = {
  addHandlers,
};