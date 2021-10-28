"use strict";
/*

JavaScript Fundamentals Part 2

*/

// - Array Operations (Methods) - //

// Push
//adauga un element la sfarsitul sirului

const friends = [`Daniel`, `Matei`, `Alex`];
const newLenght = friends.push(`Mihai`);
console.log(newLenght);
console.log(friends[friends.length - 1]);

// Unshift
//adauga un element la inceputul sirului

friends.unshift("David");
console.log(friends);

//Pop
//elimina ultimul element din sir

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//Shift
//elimina primul element dintr-un sir

friends.shift();
console.log(friends);

//IndexOf
//indica pozitia unui element intr-un sir
console.log(friends.indexOf(`Daniel`));

//Includes
//returneaza True sau False daca cautam un element din sir;

console.log(friends.includes(`Matei`));
if (friends.includes(`Matei`)) {
  console.log(`You have a friend called Matei`);
}
