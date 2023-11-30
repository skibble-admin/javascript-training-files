const math = require("./math");
/// file system
const fs = require("fs");

// fs.readFile("./108/example.txt", "utf8", (err, data) => {
//     if(err){
//         console.log(err);
//     }
//   console.log(data);
// });

const contentToWrite = "Hello, this is an example content! 🌟";

fs.writeFile("./108/example.txt", contentToWrite, "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
  }
  console.log(data);
});
