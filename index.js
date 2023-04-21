
import yoyo from "./module2.js"
yoyo();

import * as all from "./module2.js" //--> imports all the things of module
console.log(all)
//common js modules
// const check = require("./second");

//es6 module
// console.log("hello world",check);


//Module wrapper function 
// (function(exports,require,module,__filename,__dirname){

// }) // --->default hota h nodejs me iske andr require waala code aana tha -->exports me as a function export krta hai


//ES6 MODULE KE LIYE-- type : module krna pdega package.json me 
// - file name .mjs kro 
