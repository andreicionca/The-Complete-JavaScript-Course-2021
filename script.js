/*

JavaScript Fundamentals Part 1

*/

// - Basic Operators - //

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// Ridicarea la PUTERE
// 2 la puterea 3 se scrie → 2**3;
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// Adunare STRING sau Concatenare

const firstName = "Andrei";
const lastName = "Cionca";
console.log(firstName + " " + lastName);

const strIng = "I'm " + firstName + ", and my last name is " + lastName;
console.log(strIng);

// Alte operatii intr-o variabila
// let x = 10 + 5 → mai intai se face adunarea (10+5) si apoi se atribuie rezultatul (15) variabilei x;
// Expresia x += 10 inseamna x = x + 10;
// Expresia x++ inseamna x = x + 1;
// Assignment variable = right-to-left; Exemplu ↓
let x, y;
x = y = 35 - 10 - 5;
console.log(x, y);

// IN cazul de mai sus mai intai se va face scaderea deci vom avea x = y = 20, apoi se atribuie valoarea 20 variabilelor incepand din dreapta spre stanga (right-to-left) astfel ca mai intai y = 20 iar apoi x = 20 (pentru mai multe detalii vezi pe net Operators precedence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence);

// Operatori de comparare
// const num1 = 10>=9; → in acest caz variabila 'num1' va fi de tipul bool si va avea valoarea TRUE
// console.log (2021-1991 < 2021- 2018); → in acest caz mai intai se vor face scaderile si apoi se vor compara rezultatele (pentru mai multe detalii vezi pe net Operators precedence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
