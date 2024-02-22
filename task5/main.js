/* task 5: Famous Quote 2: Repeat Exercise 4,
but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message.*/
var famous_person = "Prophet Muhammad (peace be upon him)";
var quote2 = "The best of you are those who are best to their families.";
var message = "".concat(famous_person, " once said, \"").concat(quote2, "\"");
console.log(message);
