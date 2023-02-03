// function myDisplayer(some) {
//    document.getElementById("demo").innerHTML = some;
//  }
 
//  let myPromise = new Promise(function(myResolve, myReject) {
//    let x = 0;
 
//  // The producing code (this may take some time)
 
//    if (x == 0) {
//      myResolve("OK");
//    } else {
//      myReject("Error");
//    }
//  });
 
//  myPromise.then(
//    function(value) {myDisplayer(value);},
//    function(error) {myDisplayer(error);}
//  );


// constructor 


// function Person(first, last, age, eye) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.eyeColor = eye;
//  }


// To add a new property to a constructor, you must add it to the constructor function:


// function Person(first, last, age, eyecolor) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.eyeColor = eyecolor;
//    this.nationality = "English";
//  }

// Adding a Method to a Constructor 

// function Person(first, last, age, eyecolor) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.eyeColor = eyecolor;
//    this.name = function() {
//      return this.firstName + " " + this.lastName;
//    };
//  }

// Adding methods to an object constructor must be done inside the constructor function:

// function Person(firstName, lastName, age, eyeColor) {
//    this.firstName = firstName; 
//    this.lastName = lastName;
//    this.age = age;
//    this.eyeColor = eyeColor;
//    this.changeName = function (name) {
//      this.lastName = name;
//    };
//  }