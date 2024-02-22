/*task3. Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.*/
var personName = "Mohsin Malik";
var uppercase = personName.toUpperCase();
console.log("uppercase:", uppercase);
var lowercase = personName.toLowerCase();
console.log("lowercase:", lowercase);
var words = personName.split("");
var titlecase = "";
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    titlecase += word.charAt(0) + word.slice(1) + "";
}
titlecase = titlecase.trim();
console.log('titlecase:', titlecase);
