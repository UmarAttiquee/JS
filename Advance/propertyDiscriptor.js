// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const obj = {
  name: "Hamza",
  age: 34,
};

// Object.defineProperty(obj, "age", {
//   writable: false,
//   enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(obj, "age"));

for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} and ${value}`);
}
