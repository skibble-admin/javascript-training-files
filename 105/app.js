// // getTodos = (callback) => {
// //   const httpRequest = new XMLHttpRequest();

// //   httpRequest.onreadystatechange = (res) => {
// //     if (httpRequest.readyState == 4) {
// //       callback(JSON.parse(httpRequest.responseText));
// //     }
// //   };
// //   httpRequest.open("GET", "https://jsonplaceholder.typicode.com/todos");
// //   httpRequest.send();
// // };

// // getTodos((data) => {
// //   console.log(data);

// //   getTodos((data) => {
// //     console.log(data);

// //     getTodos((data) => {
// //       console.log(data);
// //     });
// //   });
// // });

// // const myPromise = new Promise((resolve, reject) => {
// //   const httpRequest = new XMLHttpRequest();

// //   httpRequest.onreadystatechange = (res) => {
// //     if (httpRequest.readyState == 4) {
// //       if (httpRequest.status == 200) {
// //         resolve(JSON.parse(httpRequest.responseText));
// //       } else {
// //         reject();
// //       }
// //     }
// //   };
// //   httpRequest.open("GET", "https://jsonplaceholder.typicode.com/todos");
// //   httpRequest.send();
// // });

// // let ifSuccess = (data) => {
// //   console.log("got data", data);
// // };

// // let ifFailure = () => {
// //   console.log("there is error in request");
// // };

// // myPromise.then(ifSuccess, ifFailure);

// let todos = "https://jsonplaceholder.typicode.com/todosss";
// let posts = "https://jsonplaceholder.typicode.com/posts/";
// let photos = "https://jsonplaceholder.typicode.com/albums/1/photos";

// let getData = async (url) => {

//   try {

//     let res = await fetch(url);
 
//     if (res.status != 200) {
//       throw new Error("The request is failed to resolve.");
//     }

//     let data = await res.json();

//     return data;
//   } catch (error) {

//     return error.message;
//   }
// };

// getData(todos).then(res=>{
//     console.log(res);
// })
