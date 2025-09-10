// const newPromise = new Promise(function (resolve, reject) {
//   const er = true;
//   if (er) {
//     console.log("Promise Resolved");
//     resolve("Success!");
//   } else {
//     console.log("Error Consumed");
//     reject("Something went wrong");
//   }
// });

// async function runPromise() {
//   try {
//     let response = await newPromise;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// runPromise();

async function allData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
}

allData();
