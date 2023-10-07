// users and tasks

// user --> name, id
// task --> Task Name , Task ID , Task Status
// Show from database
let container = document.getElementById("taskContainer");
let newTaskElem = document.getElementById("newTask");
let dateTime = document.getElementById("datetime");
let addBtn = document.getElementById("addTask");
// model layer

let user = [
  {
    userName: "Ganesh P",
    userId: 1,
  },
];

let tasks = [
  {
    name: " Take dog for a walk ",
    time: "20:53:29 07/09/2023",
    id: 1,
    done: false,
  },
  {
    name: " Feed cat",
    time: "21:53:29 07/09/2023",
    id: 2,
    done: false,
  },
];

// controllers

function updateUI() {
  container.innerHTML = "";
  tasks.forEach((task) => {

    let newLiElem = document.createElement("li");
    newLiElem.innerHTML = task.name;

    let newbtn = document.createElement("button");
    newbtn.innerHTML = "X";

    newbtn.addEventListener('click', deleteTask)

    newLiElem.appendChild(newbtn);

    container.appendChild(newLiElem);
  });
}

function addTodo() {
    
  if(!newTaskElem.value){
    alert("I can't save nothing!")
    return;
  }

  if(!dateTime.value){
    dateTime.click();
    return;
  }


  let newTask = {
    name: newTaskElem.value,
    time: dateTime.value,
    id: 3,
    done: false,
  };

  tasks.push(newTask);
  newTaskElem.value = '';
  updateUI();
}

function deleteTask(index) {
    delete tasks[index];
  updateUI();
}

function updateTask() {
  tasks[1] = {
    name: "Get car washed",
    time: new Date(),
    id: 3,
    done: false,
  };
}

// integration

addBtn.addEventListener("click", addTodo);
