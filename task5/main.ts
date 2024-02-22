/* task 5: Famous Quote 2: Repeat Exercise 4, 
but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message.*/
let famous_person: string = "Prophet Muhammad (peace be upon him)";
let quote2: string = "The best of you are those who are best to their families.";

let message: string =`${famous_person} once said, "${quote2}"`;
console.log(message);