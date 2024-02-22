//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result 
//for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
//and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// Tests for equality and inequality with strings
var city = "New York";
console.log("Is city equal to 'New York'? I predict True.");
console.log(city === "New York");
var country = "France";
console.log("Is country not equal to 'Italy'? I predict True.");
console.log(country !== "Italy");
// Tests using the lower case function
var language = "JavaScript";
console.log("Is language lowercase 'javascript'? I predict True.");
console.log(language.toLowerCase() === "javascript");
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2);
console.log("Is num2 less than or equal to num1? I predict True.");
console.log(num2 <= num1);
// Tests using "and" and "or" operators
var isSunny = true;
var isWarm = true;
console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm);
var isRaining = true;
var isCold = false;
console.log("Is it raining or cold? I predict True.");
console.log(isRaining || isCold);
// Test whether an item is in an array
var fruits = ["apple", "banana", "orange", "kiwi"];
var fruit = "banana";
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes(fruit));
// Test whether an item is not in an array
var animals = ["lion", "tiger", "elephant", "giraffe"];
var animal = "zebra";
console.log("Is 'zebra' not in the animals array? I predict True.");
console.log(!animals.includes(animal));
