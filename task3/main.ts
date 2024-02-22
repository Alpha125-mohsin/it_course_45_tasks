/*task3. Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.*/


let personName: string="Mohsin Malik";
let uppercase=personName.toUpperCase();
console.log("uppercase:",uppercase);

let lowercase=personName.toLowerCase();
console.log("lowercase:",lowercase);

let words: string[]=personName.split("");
let titlecase: string="";
for(let word of words){
    titlecase +=word.charAt(0) + word.slice(1) + "";
}
titlecase=titlecase.trim();
console.log('titlecase:',titlecase)
