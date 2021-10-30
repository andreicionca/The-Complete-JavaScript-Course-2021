"use strict";
/*

JavaScript Fundamentals Part 2

*/

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  heigh: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.heigh ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: `John Smith`,
  mass: 92,
  heigh: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.heigh ** 2;
    return this.bmi;
  },
};

//"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
//mark.calcBmi() > john.calcBmi() ? console.log(`${mark.fullName}'s BMi (${mark.bmi}) is higer that ${john.fullName}'s (${john.bmi})`) : console.log(`${john.fullName}'s BMi (${john.bmi}) is higer that ${mark.fullName}'s (${mark.bmi})`)

if (mark.calcBmi() > john.calcBmi()) {
  console.log(
    `${mark.fullName}'s BMi (${mark.bmi}) is higer that ${john.fullName}'s (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName}'s BMi (${john.bmi}) is higer that ${mark.fullName}'s (${mark.bmi})`
  );
}
