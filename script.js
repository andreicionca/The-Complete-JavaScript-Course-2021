"use strict";
/*

JavaScript Fundamentals Part 2

*/

// - Objects introduction- //

//Array

const andreiArray = [
  `Andrei`,
  `Cionca`,
  2021 - 1991,
  `teacher`,
  [`Marian`, `Simion`, `Iulian`],
];

//Object

const andrei = {
  firstName: `Andrei`,
  lastName: `Cionca`,
  age: 2021 - 1991,
  job: `teacher`,
  friends: [`Marian`, `Iuga`, `Iulian`],
};

// Dot and Bracket notation

console.log(andrei.firstName);

console.log(andrei[`lastName`]);

const nameKey = `Name`;
console.log(andrei[`first${nameKey}`]);
console.log(andrei[`last` + nameKey]);

const interstedIn = prompt(
  `What do you want to know about Andrei? Choose between firstName, lastName, age, job, and friends`
);

//Add new proprietes to object

andrei.location = `Romania`;
andrei[`twitter`] = `andreicionca1`;

if (andrei[interstedIn]) {
  console.log(andrei[interstedIn]);
} else {
  console.log(`Wrong choice`);
}

//Challenge

console.log(
  `${andrei.firstName} are ${andrei.friends.length} prieteni iar cel mai bun prieten al lui este ${andrei.friends[0]}`
);
console.log(
  `${andrei.firstName} are ${
    andrei.friends.length
  } prieteni iar cel mai bun prieten al lui este ${andrei[`friends`][0]}`
);
