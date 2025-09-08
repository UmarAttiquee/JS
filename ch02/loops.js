// let arr = ["apple", "mango", "banana", "pineapple"];
// let i = 0;

// const map = new Map();
// map.set("pk", "Pakistan"), map.set("in", "indea"), map.set("pk", "Pakistan");

// for (const [key, value] of map) {
//   console.log(key, value);
// }

// let a = arr.forEach((e) => console.log(`My Favioret fruit is ${e}`));

// for (x in arr) {
//   console.log(arr[x]);
// }

// do {
//   console.log(arr[i]);
//   i++;
// } while (i <= arr.length - 1);

// while (i <= arr.length - 1) {
//   console.log(arr[i]);
//   i++;
// }

// for (i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
// }

// for (i = 0; i <= 10; i++) {
//   console.log(`Outer Loop Value ${i}`);
//   for (j = 0; j <= 10; j++) {
//     console.log(` ${i * j}`);
//   }
// }

// let obj = {
//   JS: "Javascipt",
//   DataScience: "Python",
//   GameDEvelopment: "C++",
//   WEB: "React",
// };

// // for (key in obj) {
// //   console.log(key);
// // }

// for (key in obj) {
//   console.log(`${key}   -   ${obj[key]}`);
// }

// let arr = [
//   {
//     language: "JAva",
//     fileName: "JAva",
//   },

//   {
//     language: "python",
//     fileName: "python",
//   },

//   {
//     language: "C++",
//     fileName: "C++",
//   },
// ];

// let x = arr.forEach((e) => {
//   console.log(e.language);
// });

// let arr = [10, 52, 53, 44, 75, 96, -87, 98, 98];
// let x = arr.filter((e) => e);
// console.log(x);

// let arr = [10, 52, 53, 44, 75, 96, -87, 98, 98];
// let x = arr.reduce((sum, e) => (sum += e));
// console.log(x);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let newArr = arr
//   .map((e) => e * 2)
//   .map((e) => e + 10)
//   .filter((e) => e > 20)
//   .reduce((acc, e) => acc + e, 0);
// console.log(newArr);

// let arr = [
//   {
//     book: "English",
//     price: 200,
//   },
//   {
//     book: "Urdu",
//     price: 100,
//   },
//   {
//     book: "Physics",
//     price: 700,
//   },
//   {
//     book: "Chemistry",
//     price: 400,
//   },
// ];

// let newArr = arr
//   .map((e) => e.price)
//   .reduce((acc, e) => {
//     console.log(`The Currect Price of book is ${e} and acc value is ${acc}`);
//     return e + acc;
//   }, 0);
// console.log(newArr);
