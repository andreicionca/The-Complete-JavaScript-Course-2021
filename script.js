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

// we can use non Boolean values as the operands

// Use ANY data type, return ANY data type, short-circuiting

//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false , 0 , -0 , 0n , "" , null , undefined , and NaN )

console.log('------OR-----');
// Short circuiting with OR (||) operator
// if the first value is a truthy value, it will immediately return that first value, then the other operand will not even be evaluated.

console.log(1 || 'Jonas'); //=> 1
console.log(0 || 'Jonas'); //=> Jonas
console.log('' || 'Jonas'); //=> Jonas
console.log(null || 'Jonas'); //=> Jonas
console.log(true || 'Jonas'); //=> true

// in next example undefined is a falsy value, and so we then go to the second operand, so there is no short-circuiting, and so that's then the one that's gonna be returned.
// here we see null in the console, and that happens even though null is also a falsy value.

console.log(undefined || null); //=> null

console.log(undefined || 0 || '' || 'Hello' || 33 || null); //=>Hello

// Example use short-circuiting ||

// long way
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

// short way
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

// Short circuiting with AND (&&) operator

console.log('------AND-----');

//AND operator works in the exact opposite way of the OR operator.

//AND operator short circuits, when the first value is falsy. And then immediately returns that falsy value without even evaluating the second operand.

console.log(0 && 'Jonas'); //=> 0
console.log('' && 'Jonas'); //=> empty
console.log(null && 'Jonas'); //=> null

// when both values are truthy, it means that the evaluation continues and then simply the last value is returned.
console.log(1 && 'Jonas'); //=> Jonas
console.log(true && 'Jonas'); //=> Jonas

console.log('Hy' && 0 && '' && 'Hello' && 33 && null); //=>Hello

// Example use short-circuiting ||

// long way
if (restaurant.orderPizza) {
  restaurant.orderPizza('aaa', 'bbb');
}

// short way
restaurant.orderPizza && restaurant.orderPizza('nnn', 'ff', 'ggg');
