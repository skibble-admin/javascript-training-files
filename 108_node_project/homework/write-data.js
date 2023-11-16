const fs = require("fs");

function addTodo(text) {
  fs.writeFile("./todos.txt", text, "utf8", (err, data) => {
    if (err) {
      console.log(err.message);
    }
    console.log(data);
  });
}

function getTodo(cb) {
  fs.readFile("./todos.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    cb(data);
  });
}

module.exports = { addTodo, getTodo };
