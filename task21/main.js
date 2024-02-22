//21. They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
var countries = [
    { name: "Mohsin Malik", subject: "English", totalmarks: 100, obtainedmarks: 80 },
    { name: "Ahsan Malik", subject: "English", totalmarks: 100, obtainedmarks: 70 },
    { name: "Hassan Malik", subject: "English", totalmarks: 100, obtainedmarks: 90 },
    { name: "Hussain Malik", subject: "English", totalmarks: 100, obtainedmarks: 100 }
];
console.log("Here is information of students");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var student = countries_1[_i];
    console.log("studentname: ".concat(student.name));
    console.log("subject:".concat(student.subject));
    console.log("totalmarks:".concat(student.totalmarks));
    console.log("obtainedmarks: ".concat(student.obtainedmarks));
    console.log("==================================");
}
