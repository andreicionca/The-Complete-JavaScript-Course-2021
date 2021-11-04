'use strict';
/*

Data structures, Modern operators and Strings

*/
// - Rest Pattern and Parameters - //
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

//rest pattern uses the exact same syntax like spread operator(...), to collect multiple elements and condense them into an array.
//so that's really the opposite of spread

// 1. Destructuring

// SPREAD => RIGHT side of = (equal)
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST => LEFT side of = (equal)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(others);

// rest and spread in the same example
// rest must be the last
const [pizza, , risotto, ...othersItems] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, othersItems);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2. Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return console.log(sum);
};
add(4, 5);
add(4, 5, 9);
add(4, 5, 9, 22);

// another example
const x = [30, 2, 44];
add(...x, 5, 10);

// example with object method

restaurant.orderPizza('salam', 'cascaval', ' sare', 'ciuperci');
