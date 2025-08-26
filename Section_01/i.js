// Data Types Premitive
// [Number , Boolean , String , BigInt , Symbol , undefine , NaN , null]

// Reference type yh non premitive
// functions Objects Array

// Code execution
// console.log(1+2+2+ "67")  = 567
// console.log("1"+2+2+ 67) = 12267

//Stack(Premitive)
// Make Copy Not Orignal Change
// let a = "Hamza"
// let b = a
// b = "ali"
// console.log(a)
// console.log(b)

//  Heap(No-premitive)
// Make Change in Orignal Data
// let ob = {name : "Hamza"}
// let ob0 = ob
// ob0.name = "Faisal"
// console.log(ob0.name)
// console.log(ob.name)

// Connversion String to Numbers
// let num0 = null;
// let num00 = Number(num0);
// console.log(num00);
// console.log(typeof num00);

//string
// const namef = new String ("Hafiz Muhammad Umar Attique")
// let namef = "Hafiz-Muhammad-Umar"
// console.log(namef.replace("Umar" , "Ali"))
// console.log(namef.trim())
// console.log(namef.split('-'))
// console.log(namef.toLowerCase())
// console.log(namef)

//Numbers
// let num = new Number(3500000)
// console.log(num)
// console.log(num.toString())
// console.log(num.toFixed(4))
// console.log(num.toLocaleString())

//Maths
// const max = 30;
// const min = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(Math.abs(-4.6));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));


//Date
let  dat = new Date()
console.log(dat.getHours())
// let timestamps = Date.now()
// console.log(timestamps)
// console.log(dat)
// console.log(dat.toString())
// console.log(dat.toDateString())
// console.log(dat.toTimeString())
// console.log(dat.toISOString())
// console.log(dat.toLocaleString())
// console.log(dat.toLocaleTimeString())