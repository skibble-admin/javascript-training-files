const express = require("express");
const todoService = require("./write-data");
const app = express();

app.get("/", (req, res) => {
  res.send("Todo server is running");
});

app.get("/saveTodo", (req, res) => {
  todoService.addTodo("addd this to a file");

  res.send("Todo is added");
});

app.get("/getTodo", (req, res) => {
  todoService.getTodo((data) => {
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("web server started");
});
