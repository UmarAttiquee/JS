// console.log("hello")

// For Loop
// let a = 2
// for (let i = 0 ; i<=10 ; i++)
// {
//   if(i*a == 12)
//   {
//     continue;
//   }
//   if(i*a == 16)
//   {
//     break;
//   }
//   console.log(`${a} * ${i} = ${2*i}` )
// }


// for(let i = 0 ; i<=arr.length-1 ; i++)
// {
//   console.log(arr[i])
// }



//While Loop
// let a = 0;
// while(a<=arr.length-1)
// {
//   console.log(arr[a])
//   a++
// }





// For OF Loop for arrays /Map
// let arr = ["mango" , "banana" , "orange" , "stowbarry" , "pineapple" , "charry"]
// // for(value of arr)
// // {
// //   console.log(value)
// // }


// const map = new Map()
// map.set('name' , "hamza")
// map.set('email' , "hamza@gmail.com")
// map.set('name' , "hamza")

// for(const [key , value] of map)
// {
//      console.log(key , value)
// }



// For In Loop For Objects /Arrays not map
// let obj = 
// {
//   "name" : "Hamza",
//   "email" : "hamza@gmail.com",
//   "age" : 34,
//   "salary" : 43000
// }

// for(const key in obj)
// {
// console.log(`Key is ${key} and its value is ${obj[key]}`)
// }




//For Each Loop
// let arr = ["mango" , "banana" , "orange" , "stowbarry" , "pineapple" , "charry"]

// arr.forEach((item , index , arr)=>
//   {
//    console.log(item  , index , arr)
//   })

// function fun(val)
// {
//   console.log(val)
// }

// arr.forEach(fun)



// let arr = [
//   {
//     "language" : "c++",
//     "PC" :"Mac"
//   },
//   {
//     "language" : "python",
//     "PC" :"Mac"
//   },
//   {
//     "language" : "java",
//     "PC" :"Mac"
//   },
//   {
//     "language" : "ruby",
//     "PC" :"Mac"
//   },
// ]

// arr.forEach((v)=>{
//   console.log(v.language)
// })




// let arr = ["mango" , "banana" , "orange" , "stowbarry" , "pineapple" , "charry"]
// let ar =[]
// let value = arr.forEach((value) => {
//   ar.push(value)
// })
//  console.log(ar)


// let arr = [1,2,3,4,5,6,7,8,9,10]
// let ar = arr.filter((val)=>{
//   return val > 4
// })
// console.log(ar)



// let arr = [
//   {
//     "language" : "c++",
//     "PC" :"Mac"
//   },
//   {
//     "language" : "python",
//     "PC" :"Mac"
//   },
//   {
//     "language" : "java",
//     "PC" :"Mac"
//   },
//   {
//     "language" : "c++",
//     "PC" :"window"
//   },
// ]

// let ar = arr.filter((val)=>{
//   return val.language =="c++" && val.PC=="window"
// })

// console.log(ar)






//MAP
// let arr = [1,2,3,4,5,6,7,8,8]
// const newarr = arr.map((val) => {
//   return val*2
// }).filter((va) =>{
//   return va>10
// }).reduce((v,va) => {
//   return v+va
// },100)
// console.log(newarr)



// let arr = ["mango" , "banana" , "orange" , "stowbarry" , "pineapple" , "charry"]
// let fr = {}
//  arr.forEach((value , index)=>{
//   fr[index] = value
// })
// console.log(fr)