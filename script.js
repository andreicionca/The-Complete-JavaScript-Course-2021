"use strict";
/*

JavaScript Fundamentals Part 2

*/

// - Functions - //

function mediaAnuala(romana, mate, fizica, religie) {
  const rezultat = `Media anuala este: ${
    (romana + mate + fizica + religie) / 4
  }`;
  return rezultat;
}
const mediaFinala = mediaAnuala(5, 6, 7, 9);
console.log(mediaFinala);
