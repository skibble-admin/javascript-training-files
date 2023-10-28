class Person {
  constructor(name, occupation) {
    this.fullName = name;
    this.occupation = occupation;
  }

  introduce() {
    console.log("Howdy! I am " + this.fullName);
  }

  goWalking() {
    console.log("I am now walking sir!");
  }
}

class Student extends Person {

    study(){
        console.log("I am studying....");
    }
}

class Teacher extends Person {

    teach(){
        console.log("I am teaching....");
    }
}
// let Student = new Person();


let ganesh = new Teacher("Ganesh Pilli", "Student");

ganesh.goWalking = ()=>{
    console.log(" I am teacher I am busy");
}

ganesh.goWalking();

let suresh = new Student("Suresh Malepati", "Student");
suresh.goWalking();


// collage management app
// student
// teacher
