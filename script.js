'use strict';
/*

Data structures, Modern operators and Strings

*/
// - Destructuring Objects- //
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
};

//destructuring is to break a complex data structure (example objects) down into a smaller data structure like a variable.

//to destrucure object we use curly braces

//all we have to do is to provide the variable names that exactly match the property names that we want to retrieve from the object.

//in an object, the order of elements does not matter, we don't need to manually skip elements like we did in an array.

const { openingHours, categories, nameRestaurant } = restaurant;
console.log(openingHours, categories, nameRestaurant);

//if we wanted the variable names to be different from the property names we do this => const { objectPropretyName: newName} = objectname;
const { openingHours: hours, categories: tags } = restaurant;
console.log(hours, tags);

// use default values for object destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables

let a = 111;
let b = 999;

const obj = { a: 22, b: 7, c: 14 };

//for mutating variables we need parenthesis ()
({ a, b } = obj);
console.log(a, b);

//nested objects
//example with restaurant object 'openingHours'
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//calling method for destructuring object

restaurant.orderDelivery({
  time: '22:40',
  address: 'Bd Bucuresti, 39',
  mainIndex: 2,
  starterIndex: 2,
});
