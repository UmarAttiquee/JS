// console.log("Arrays");
// const arr = [
//   1,
//   3,
//   5,
//   26,
//   44,
//   25,
//   [1, 2, 3, 4, 43, [0, 9, 8, [1, 2], 7, 6, 9, 0], 4, 6, 7, 8],
//   36,
//   7,
//   1,
//   4,
//   7,
//   90,
// ];
// const ar = ["apple", "mango", "grapps", "pine"];

// ar.push("stowberry");
// ar.unshift("gave");
// ar.pop();
// ar.shift();

// console.log(ar.includes("apple"));     // Find Element which includes in array
// console.log(ar.indexOf("mango"));      // Find the Index of element

// console.log(ar.join());                // Convert Array into String

// console.log("A", ar);
// console.log(ar.slice(1, 3));           // Do not remove elements in orignal array it includes index 1,2  not 3
// console.log(ar);

// console.log("B", ar);
// console.log(ar.splice(1, 3));          // Do remove elements in orignal array it includes index 1,2,3
// console.log(ar);

// newAr = ar.concat(arr);                   // It merge 2 arrays and return new Array
// console.log(newAr);

// newAr = [...arr, ...ar];                    // It merge 2 arrays and return new Array In Simple way
// console.log(newAr);

// newAr = arr.flat(Infinity);              // It break down multiple arrays in to single arry and return new Array
// console.log(newAr);

// console.log(Array.isArray(newAr));             // Check is there is an array or not
// console.log(Array.from("Hamza Rashid Is Good Boy"));   // convert each cherector into array

// let score1 = 233;
// let score2 = 10;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));   //convert each variable into array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let val = 2;

// arr.forEach((e) => {
//   let x = e * val;
//   console.log(x);
//   return x;
// });
// console.log(arr);

// arr.map((e) => {
//   let x = e * val;
//   console.log(x);
//   return x;
// });
// console.log(arr);

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((e) => {
//   return e * 2;
// });
// console.log(myArr);
// console.log(newArr);

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.filter((e) => {
//   return e > 3;
// });
// console.log(myArr);
// console.log(newArr);

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.reduce((t, e) => {
//   return e + t;
// });
// console.log(myArr);
// console.log(newArr);

// const numbers = [45, 24, 29, 216, 25];   // Check the condition
// let allOver18 = numbers.every(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allOver18);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];     // Make Array as Key Value Pairs
// const keys = fruits.map((x, index) => {
//   return [index, x];
// });
// console.log(fruits);
// console.log(keys);

//  Array with() method as a safe way to update elements in an array without altering the original array.
// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(months);
// console.log(myMonths);

const str = "Hello world this is JavaScript";
console.log(str.split(" "));
