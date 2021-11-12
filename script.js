'use strict';
/*

Data structures, Modern operators and Strings

*/
// - Short Circuiting (&& and ||) - //
const restaurant = {
  nameRestaurant: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious past with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// - logical assignment operators - //

// OR assigment

const rest1 = {
  name: 'Dabo',
  numGuest: 20,
};

const rest2 = {
  name: 'Boro',
  owner: 'Mihai',
};

// long way
/*rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

console.log(rest1.numGuest);
console.log(rest2.numGuest);
*/

// short way same result

rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

console.log(rest1.numGuest);
console.log(rest2.numGuest);

// Nullish assignment

//rest1.numGuest ??= 10;
//rest2.numGuest ??= 10;

// AND assigment

rest1.owner &&= 'Andrei';
rest2.owner &&= 'Andrei';

console.log(rest1);
console.log(rest2);
