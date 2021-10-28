/*

JavaScript Fundamentals Part 1

*/

// - Template Literals - //
// Regula de formare pentru Temp.literal este urmatoarea → Folosim caracterul ` (backticks) urmat de textul dorit. Pentru variabila din text folosim caracterul dolar $ apoi in acolada {} numele variabilei. La sfarsit punem din nou caracterul ` Vezi exemplul de mai jos ↓

const firstName = "Andrei";
const lastName = "Cionca";
const myAge = 29;
const stRing = `I'm ${firstName} and I have ${myAge} years!`;
console.log(stRing);

//Putem folosi caracterul backticks `` pentru toate textele;

// Multiline string
// E foarte util caracterul backticks `` si cand vrem sa inseram textul pe randul urmator ↓

console.log(`String
multiple
line`);
