"use strict";
/*

JavaScript Fundamentals Part 2

*/

// - Array Introducere - //

const friends = [`Daniel`, `Matei`, `Alex`];
console.log(friends[0]);
console.log(friends.length);
friends[2] = `Luca`;
console.log(friends[friends.length - 1]);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years[2]);
console.log(years[years.length - 1]);

const secondName = `Cionca`;
const andrei = [`Andrei`, secondName, 2037 - 2021, `teacher`, friends];
console.log(andrei);

const age = function (birthYear) {
  return 2021 - birthYear;
};
const kids = [age(1991), age(2000), age(2016)];
console.log(kids[kids.length - 1]);
