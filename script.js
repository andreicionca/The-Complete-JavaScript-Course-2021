'use strict';
/*

JavaScript in the Browser: DOM and Events Fundamentals

*/

// - Selecting and Manipulating Elements - //

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'JavaScript is fun';
document.querySelector('.field').value = 1000000;

// - Events listener -//

// as the first argument, we had the name of the event that we're listening for, which is a click.

// as the second argument, we have this function value.

// this function will not be called immediately once the script here is executed. This function will only be called as soon as the event (click in this case) happens.

document.querySelector('.btn').addEventListener('click', function () {
  document.querySelector('.field').value = 0;
});

// best practice with elements is to select the elements that we need, and then we store the selections into variables. And then we can use them over and over again.
//document.querySelector('.message').textContent = 'JavaScript is fun';

const messageContent = function (message) {
  document.querySelector('.message').textContent = message;
};
messageContent('I made some changes');
