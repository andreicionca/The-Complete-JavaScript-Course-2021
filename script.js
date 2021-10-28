/*

JavaScript Fundamentals Part 1

*/

// - Taking Decisions: if / else Statements - //
// If Statements

// if(true) → {........}

const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log(`Sara poate conduce masina`);
}

// If si Else Statements
// if(true) → {........} else → {........}

const ageNew = 13;
const isOldEnoughNew = ageNew >= 18;
const yearLeft = 18 - ageNew;
if (isOldEnoughNew) {
  console.log(`Sara poate conduce masina`);
} else {
  console.log(
    `Sara nu poate conduce masina. Mai are de asteptat inca ${yearLeft} ani.`
  );
}
