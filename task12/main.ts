// task:12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// Exercise 1: Store names in an array and print each name
const names: string[] = ["Ali", "Hamza", "shayan", "salman"];

console.log("Exercise 1:");
for (const name of names) {
    console.log(name);
}

// Exercise 2: Print personalized greetings to each person
console.log("\nExercise 2:");
for (const name of names) {
    console.log(`Hello, ${name}! Have a great day!`);
}
