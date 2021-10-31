'use strict';
/*

JavaScript in the Browser: DOM and Events Fundamentals

*/

// - Selecting and Manipulating Elements - //

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'JavaScript is fun';
document.querySelector('.field').value = 1000000;
console.log(document.querySelector('.field').value);
