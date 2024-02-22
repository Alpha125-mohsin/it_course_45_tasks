//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
var guestList7 = ["Albert Einstein", "Maya Angelou", "Nelson Mandela", "Marie Curie", "Stephen Hawking"];
// Print the number of people being invited to dinner
console.log("Number of people being invited to dinner: ".concat(guestList7.length));
// Inform guests about the limitation
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Print the number of people being invited to dinner again
console.log("Number of people being invited to dinner: ".concat(guestList7.length));
// Remove guests until only two names remain
while (guestList7.length > 2) {
    var removedGuest = guestList7.pop(); // Remove the last guest
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitation messages to the remaining guests
console.log("\nInvitations to the remaining guests:");
for (var _i = 0, guestList7_1 = guestList7; _i < guestList7_1.length; _i++) {
    var guest = guestList7_1[_i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner. We look forward to seeing you!"));
}
// Empty the list
guestList7 = [];
// Print the empty list
console.log("\nEmpty list:", guestList7);
