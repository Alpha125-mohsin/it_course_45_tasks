// 16. More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program
// informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list

let currentlist: string[]=["Ahsan","Hassan","Hussain"];
for (let i=0; i<currentlist.length; i++){
    console.log(`Hi ${currentlist[i]} you are invited for dinner`)
}
let notcomming: string= currentlist[2];
console.log(`${notcomming} not able to join  `)
currentlist[2]="Shayan";
console.log("\n");
for (let i= 0; i<currentlist.length;i++){
    console.log(`hello ${currentlist[i]} you are invited for dinner`)
}

console.log(" \t\n ===========New guest are invited ============== \t\n")
currentlist.unshift("Mohsin");
currentlist.splice(Math.floor(currentlist.length/2),0,"Rock");
currentlist.push("Rocky");
for(let i=0; i<currentlist.length; i++){
    console.log(`hello ${currentlist[i]} you  are invited for dinner`);
}