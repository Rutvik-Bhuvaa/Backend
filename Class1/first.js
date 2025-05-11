const sum = require("./second");

// here by default code of second.js is private
// (function () {
//   console.log("i am inside second file");
//   function sum(a, b) {
//     return a + b;
//   }
// })();

console.log(sum(3, 4));

console.log("i am inside first file");
