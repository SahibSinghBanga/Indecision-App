console.log("app.js is running");

/* ___UTILS.js___*/
// import './utils.js';
// import subtract, { square, add } from './utils.js'


// console.log(square(4));
// console.log(add(4, 10));
// console.log(subtract(100, 80));


/* ___PERSON.js___*/
import isSenior, { isAdult, canDrink } from './person.js'

console.log(isAdult(18));
console.log(canDrink(18));
console.log(isSenior(65));


/* DEFAULT AND NAMED EXPORTS

import isSenior, { isAdult, canDrink } from './person.js' => isSenior is default, isAdult & canDrink are named

export { isAdult, canDrink, isSenior as default } => isSenior is default, isAdult & canDrink are named


*/

