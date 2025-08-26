// Array

const arr = [1,2,3,4,5,6,7]
const ar = [44,66,88,99,2020,12]


// console.log(arr.join())

// console.log("A:  " + arr)
// console.log(arr)

// console.log("A:  " + arr.slice(1,3))
// console.log(arr)


// console.log("A:  " + arr.splice(1,3))
// console.log(arr)

// console.log(ar.push(arr))
// console.log(ar)
// console.log(arr.concat(ar))

// const allArrays = [...arr , ...ar]
// console.log(allArrays)


// let a = "Hamza"
// let b = "Rashid"  
// let c = "Amna"
// console.log(Array.isArray('Hamza Rashid'))
// console.log(Array.from([a,b,c]))
// console.log(Array.of(a,b,c))



// let sym = Symbol("key1")
// let JsUser = {
//   name : "Hamza",
//   "email" : "Hamza@WebGLUniformLocation.com",
//   [sym] : "Keys"
// }
// // console.log(obj)
// // console.log(obj.name)
// // console.log(obj["email"])
// // console.log(obj[sym])

// JsUser.greeting = function()
// {
//   console.log(`Hello User ${this.name} how is your Email ${this.email}` )
// }
// console.log(JsUser.greeting())



// let JsUser = new Object()
// JsUser.name = "Hamza",
// JsUser.email = "Umargmail.com"
// console.log(JsUser)

// let a = {
//   'Nmae' : "Umar"
// }
// let b = { email : "umar@gmail.com"}
// let c = {...a ,...b}
// // let c = Object.assign({} , a,b)
// // console.log(c)

// console.log(Object.keys(a))
// console.log(Object.values(a))
// console.log(Object.entries(a))
// console.log(a.hasOwnProperty('Namae'))




let JsUser = {
  name : "umar",
  age :32
}

const {name: n} = JsUser
console.log(n)