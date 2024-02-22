//20.Think of something you could store in a array. For example, you could make a list of
// mountains, rivers, countries, cities, languages, or anything else you’d like. 
//Write a program that creates a list containing these items

// Create an array to store programming languages
let programmingLanguages: string[] = ["JavaScript", "Python", "Java", "C++", "C#", "Swift", "dart", "Go", "PHP", "TypeScript"];

// Print the list of programming languages
console.log("\n \tList of programming languages:\n\t");
for (let language of programmingLanguages) {
    console.log(language);
}