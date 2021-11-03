'use strict';
/*

Data structures, Modern operators and Strings

*/
// - Destructuring Arrays- //
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//destructuring is to break a complex data structure (example arrays) down into a smaller data structure like a variable.

const arr = [2, 3, 4];

//how we copy array into separate variable if we don't use destrucuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring array
const [x, y, z] = arr;
console.log(x, y, z);

//destructuring array from object
const [first, second] = restaurant.categories;
console.log(first, second);

//destructuring first and 3rd element of an array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switch variables ussing destructuring. Work only with let and var
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recive 2 return values from a function and destructuring in 2 variables
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, ',', mainCourse);

//destructuring nested array from
const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
console.log(`${i}, ${j}, ${k}`);

//Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);

//default values in variables for avoid undefined variable
const [s = 1, t = 1, w = 1] = [8, 9];
console.log(s, t, w);
