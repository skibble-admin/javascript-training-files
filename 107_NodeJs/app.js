// Recap

// Object Oriented Programming?

// Style or Practice of writing code - standard

// Procedural Programming
// Functional Programming
let VPsalaries = [30, 40, 60, 2];

function VPaverageSalaries() {
  let sum = 0;
  for (let index = 0; index < VPsalaries.length; index++) {
    sum = sum + VPsalaries[index];
  }
  return sum / VPsalaries.length;
}

// OOPJs

// Data abstraction
// Encapsulation

// function Salaries(salaries) {
//   this.salaries = salaries;
//   this.addNewSalary = function (newSalary) {
//     this.salaries.push(newSalary);
//   };

//   this.average = function () {
//     let sum = 0;
//     for (let index = 0; index < salaries.length; index++) {
//       sum = sum + salaries[index];
//     }
//     return "Rs. " + sum / salaries.length;
//   };
// }

class Salaries {
  goal = 0;

  get length() {
    return this.salaries.length;
  }

  set length(num) {
    this.goal = num;
  }

  constructor(salaries) {
    // console.log(fireball);
    this.salaries = salaries;
  }

  addNewSalary(newSalary) {
    this.salaries.push(newSalary);
  }

  average() {
    let sum = 0;
    for (let index = 0; index < this.salaries.length; index++) {
      sum = sum + this.salaries[index];
    }
    return "Rs. " + sum / this.salaries.length;
  }
}

let managersSalary = new Salaries([240, 350]);
managersSalary.addNewSalary(500);
managersSalary.addNewSalary(500);
console.log(managersSalary.average());
