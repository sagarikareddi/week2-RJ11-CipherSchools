// use of .map() 

// const persons = [
//    {firstname : "Malcom", lastname: "Reynolds"},
//    {firstname : "Kaylee", lastname: "Frye"},
//    {firstname : "Jayne", lastname: "Cobb"}
//  ];
 
//  persons.map(getFullName);
 
//  function getFullName(item) {
//    return [item.firstname,item.lastname].join(" ");
//  }


// Multiply all the values in an array with 10:

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }


// let array = [1, 2, 3, 4, 5];
// let newArray = [];

 

// for (let i = 0; i < array.length; i++) {

//    newArray[i] = array[i] * array[i];


// }
// console.log(newArray);


// .forEach()


// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }



// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }

// .filter() 

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }



// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);


// .find()

// const ages = [3, 10, 18, 20];

// function checkAge(age) {
//   return age > 18;
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = ages.find(checkAge);
// }




// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);


// .sort()


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();


// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});



// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});


// const points = [40, 100, 1, 5, 25, 10];

// // Sort the numbers in ascending order
// points.sort(function(a, b){return a-b});

// let lowest = points[0];


// const points = [40, 100, 1, 5, 25, 10];

// // Sort the numbers in descending order:
// points.sort(function(a, b){return b-a});

// let highest = points[0];



// const points = [40, 100, 1, 5, 25, 10];

// // Sort the numbers in ascending order:
// points.sort(function(a, b){return a-b});

// let highest = points[points.length-1];


// object destructuring  



 
// let details = {
//    name: "Alex",
//    age :24,
//    address : {
//       street: "Brooklyn",
//       city: "New York",
//      state: "NY", 
//       country :"USA",
//       passportDetails : {
//          passportNumber: "ABCD1234",
//       },

//    },
// };
// let passportNumber = details.address.passportDetails.passportNumber ;
// console.log(passportNumber);

// let obj1 = { name: "Shantanu" };

// let obj2 = { name: “Shantanu” };

// function areEqual (obj1,obj2) {
//    if (obj1 == obj2) {
//       return true;    
// }
// if (Object. keys(obj1).length != Object. keys(obj2).length) {
//    return false;
   
//    }
//    for (let key of Object.keys(ob1)) {
//       if (typeof obj2[key] == “undefined") {
//          return false;
//       }


   
    
   
    
   
    
   
   
    
 
