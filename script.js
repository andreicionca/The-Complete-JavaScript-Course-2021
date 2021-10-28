"use strict";
/*

JavaScript Fundamentals Part 2

*/

// - Function declaration, Function expression, Arrow Function - //

// -Function declaration
//!Poate fi apelata si inainte de initializare;

function calcAge1(birthyear) {
  return 2037 - birthyear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function expression
//!Nu poate fi apelata inainte de initializare;

const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calcAge2(1991);
console.log(age2);

// Arrow functions
// Este o forma mai scurta a Function expresion;
//Se scrie mai intai variabila apoi semnul egal = urmat de parametru si apoi return => operatia dorita;

//Exemplu 1 ↓

const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

//Exemplu 2 ↓

const yearUntilRetirement = (birthyear) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearUntilRetirement(1991));

//Exemplu 3 ↓

const yearUntilRetirement2 = (birthYear, name) => {
  const age = 2039 - birthYear;
  const retirement = 65 - age;
  return `${name} retires in ${retirement} ages.`;
};
console.log(yearUntilRetirement2(1991, `Andrei`));
