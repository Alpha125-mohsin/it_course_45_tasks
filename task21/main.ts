//21. They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
let countries: {name:string, subject: string, totalmarks: number, obtainedmarks: number}[]=[
    {name: "Mohsin Malik", subject: "English", totalmarks:100, obtainedmarks :80 },
    {name: "Ahsan Malik", subject: "English", totalmarks:100, obtainedmarks :70 },
    {name: "Hassan Malik", subject: "English", totalmarks:100, obtainedmarks :90 },
    {name: "Hussain Malik", subject: "English", totalmarks:100, obtainedmarks :100 }
]
console.log("Here is information of students")
for(let student of countries){
    console.log(`studentname: ${student.name}`)
    console.log(`subject:${student.subject}`)
    console.log(`totalmarks:${student.totalmarks}`)
    console.log(`obtainedmarks: ${student.obtainedmarks}`)
    console.log("==================================")

}