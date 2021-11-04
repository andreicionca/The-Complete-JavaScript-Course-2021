'use strict';
/*

Data structures, Modern operators and Strings

*/
// - The Spread Operator (...) - //
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
};

//basically, the spread operator expand an array into all of its individual elements.
//example of add some values and copy other array into this new array
const arr = [3, 4, 5];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

// same thing but easy way using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

//expand an array into all of its individual elements
console.log(...newArr);

// here we create new array from object property
const newMenu = [...restaurant.mainMenu, 'Halva'];
console.log(newMenu);
console.log(...newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);

//Iterables are arrays, strings, maps, and sets, BUT not objects.

// how we use spread operator on String
const str = 'Jonnas';
console.log(...str);

const strArr = [...str, ' ', 'D'];
console.log(strArr);
console.log(...strArr);

//multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array.

/*
const ingredients = [
  prompt("Let's make paste! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
//long way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//same thing but short way with spread operator
restaurant.orderPasta(...ingredients);
*/

// Spread operator on object
// since ES 2018, the spread operator actually also works on objects
const newRestaurant = { ...restaurant, foundedIn: 1993, founder: 'Andrei' };

console.log(newRestaurant);

// easy way to copy an object
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
