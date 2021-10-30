"use strict";
/*

JavaScript Fundamentals Part 2

*/

// - Objects Methods- //

const andrei = {
  firstName: `Andrei`,
  lastName: `Cionca`,
  birthYear: 1991,
  job: `profesor`,
  friends: [`Marian`, `Iuga`, `Iulian`],
  hasDriverLicense: true,
  //This is called a method ↓
  // calcAge: function (birthYear) {
  //   return 2021-birthYear;

  // this keyword ↓
  // calcAge: function () {
  //   return 2021-this.birthYear;
  // }

  //Crearea unei proprietati a obiectului intr-o functie >>> andrei.age este proprietatea

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} este un ${
      this.job
    } in varsta de ${this.calcAge()} de ani si ${
      this.hasDriverLicense ? `are` : `nu are`
    } permis auto.`;
  },
};
console.log(andrei.calcAge());
console.log(andrei.age);
console.log(andrei.age);
console.log(andrei.age);

//Chalenge
//''Andrei este un profesor in varsta de 30 de ani si are permisul auto''

console.log(
  `${andrei.firstName} este un ${andrei[`job`]} in varsta de ${
    andrei.age
  } de ani si ${andrei.hasDriverLicense ? `are` : `nu are`} permisul auto.`
);

console.log(andrei.getSummary());
