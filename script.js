"use strict";
/*

JavaScript Fundamentals Part 2

*/

// - For Loop- //

for (let i = 1; i <= 30; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

const andreiArray = [
  `Andrei`,
  `Cionca`,
  2021 - 1991,
  `teacher`,
  [`Marian`, `Simion`, `Iulian`],
  true,
];

const types = [];
for (let i = 0; i < andreiArray.length; i++) {
  console.log(andreiArray[i], typeof andreiArray[i]);

  // Filling types array
  //types[i] = typeof andreiArray[i]
  types.push(typeof andreiArray[i]);
}
console.log(types);

const years = [1991, 2000, 2009, 1937];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
  console.log(ages[i]);
}

// continue and break

for (let i = 0; i < andreiArray.length; i++) {
  //continue is to exit the current iteration of the loop and continue to the next one
  if (typeof andreiArray[i] !== `string`) continue;

  console.log(andreiArray[i], typeof andreiArray[i]);
}

for (let i = 0; i < andreiArray.length; i++) {
  //break is used to completely terminate the whole loop.
  if (typeof andreiArray[i] === `number`) break;

  console.log(andreiArray[i], typeof andreiArray[i]);
}
