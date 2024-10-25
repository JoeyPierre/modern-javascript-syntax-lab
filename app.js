// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const newArray = nums.map((currentElement)=>{
    return currentElement * 2 ;

});
console.log(newArray);
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// const [firstTopping, secondTopping] = pizzaToppings
// console.log (firstTopping);
// console.log (secondTopping);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
//   const {make, model} = car
//   console.log(make);
//   console.log(model);


// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
duplicateArray = [...pizzaToppings];
console.log(duplicateArray);


// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  const myCar = {...car};
  myCar.model = 'q7'
  console.log(car);
  console.log(myCar);
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const userProfile = {
    username:'Jason',
    age: 30
}

const propertyName = "username"

userProfile[propertyName] = "Max"

console.log(userProfile)



// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here


function myPet(noun = "cat", adjective = "white") {
    console.log(`The ${noun} is ${adjective}.`);
   
    // Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here


    let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck')