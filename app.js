//JS: Variables Intro Workshop

console.log();

let firstName = "Aishah ";
console.log(firstName);

let age = "26";
console.log(age);

let favouriteColour = "pink ";
console.log(favouriteColour);

let petNameOne = "Po ";
console.log(petNameOne);

let petNameTwo = "Ella ";
console.log(petNameTwo);

console.log(10);
console.log(20);
console.log(35);
console.log(10 + 20);
console.log(35 + 20);

let numberOne = 10;
let numberTwo = 30;
let numberThree = 55;
console.log(numberOne);
console.log(numberTwo);
console.log(numberTwo + numberThree);
console.log(numberOne + numberOne);

let greeting = "Hello ! ";
let introName = "My name is ";
console.log(greeting + introName + firstName + ", I am " + age + " years old");

numberOne = 30;
numberTwo = 10;
console.log(numberOne);
console.log(numberTwo);

//JS:Primitive Data Types Workshop

let number = 5;
console.log(number);

let pens = 20;
let pencils = 12;
let stationary = pens + pencils;

console.log(stationary);

let myName = "Aishah";
console.log(myName);

let lastName = "Perks";
let fullName = firstName + " " + lastName;

console.log(fullName);

let literalsFirstName = "Aishah";
let literalsLastName = "Perks";
let literalsFullName = `${literalsFirstName} ${literalsLastName}`;

console.log(literalsFullName);

console.log(
  `${literalsFirstName} is ${literalsFirstName.length} characters long`
);

let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);

console.log(typeof firstName);
console.log("The type of number is" + typeof numberOne);
console.log(`The type of isTrue is ${typeof isTrue}`);

let pizza;
console.log(pizza);

let a = 20;
let b = 10;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAGreaterThanB);
console.log(isALessThanB);
console.log(isAEqualToB);

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB);

let dreamJob = "Software Developer";
let daysStudying = 4;

const sentence = `My dream job is to one day be a ${dreamJob}. I have been studying for ${daysStudying}`;
console.log(sentence);
