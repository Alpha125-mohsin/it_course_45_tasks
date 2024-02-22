//23.Conditional Tests: Write a series of conditional tests. Print a statement describing each 
//test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let age: number = 25;
let isStudent: boolean = true;
let name1: string = "John";
let x: number = 10;
let y: number = 5;

// Test 1: Check if age is greater than or equal to 18
console.log("Is age >= 18? I predict True.");
console.log(age >= 18);

// Test 2: Check if isStudent is true
console.log("Is isStudent true? I predict True.");
console.log(isStudent);

// Test 3: Check if name is equal to "John"
console.log("Is name == 'John'? I predict True.");
console.log(name1 == "John");

// Test 4: Check if x is less than y
console.log("Is x < y? I predict False.");
console.log(x < y);

// Test 5: Check if x is not equal to y
console.log("Is x != y? I predict True.");
console.log(x != y);

// Test 6: Check if name is equal to "Jane"
console.log("Is name == 'Jane'? I predict False.");
console.log(name1 == "Jane");

// Test 7: Check if age is less than 18
console.log("Is age < 18? I predict False.");
console.log(age < 18);

// Test 8: Check if isStudent is false
console.log("Is isStudent false? I predict False.");
console.log(!isStudent);

// Test 9: Check if x is greater than y
console.log("Is x > y? I predict True.");
console.log(x > y);

// Test 10: Check if age is equal to 25
console.log("Is age == 25? I predict True.");
console.log(age == 25);
