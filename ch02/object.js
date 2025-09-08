// let userId = Symbol("key0");

// let obj = {
//   [userId]: "ABCD",
//   firstName: "Hamza",
//   lastName: "Rashid",
//   fullName: function fun() {
//     return this.firstName + this.lastName;
//   },
//   age: 34,
//   status: true,
// };

// obj1 = {
//   address: "ShadbaGh",
//   city: "Lahore",
// };

// // const newObj = Object.assign({}, obj, obj1);
// const newObj = { ...obj, ...obj1 };

// console.log(newObj.hasOwnProperty("address"));

// console.log(newObj);
// console.log(Object.keys(newObj));
// console.log(Object.values(newObj));
// console.log(Object.entries(newObj));

// Object.freeze(obj);
// obj.status = false;

// console.log(obj["fullName"]());
// console.log(obj[userId]);
// console.log(obj["status"]);
// console.log(obj);

let obj = {
  firstName: "Hamza",
  lastName: "Rashid",
  get fullName() {
    return this.firstName + this.lastName;
  },
  age: 34,
  status: true,
};

const { firstName, lastName, fullName, age, status } = obj;
console.log(firstName);
console.log(obj.firstName);
console.log(fullName);
