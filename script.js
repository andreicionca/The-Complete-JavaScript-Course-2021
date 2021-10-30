"use strict";
/*

JavaScript Fundamentals Part 2

*/

// - Loop Backwards and Loops in Loops- //

const andreiArray = [
  `Andrei`,
  `Cionca`,
  2021 - 1991,
  `teacher`,
  [`Marian`, `Simion`, `Iulian`],
  true,
];

for (let i = andreiArray.length - 1; i >= 0; i--) {
  console.log(andreiArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------Starting exercises ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}
