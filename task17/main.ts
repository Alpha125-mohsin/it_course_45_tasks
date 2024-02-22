//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
//time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying 
//that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry
// you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.

let guestList5: string[] = ["Mohsin", "Ahsan", "Hamza", "ALi", "Umer"];

// Inform guests about the bigger dinner table
console.log("Great news! We found a bigger dinner table!");

// Add new guests
guestList5.unshift("Rock"); // Add one new guest to the beginning
guestList5.splice(3, 0, "Hassan"); // Add one new guest to the middle
guestList5.push("Huzaif"); // Add one new guest to the end

// Print invitation messages to all guests
console.log("Invitations to dinner:");
for (let guest of guestList5) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join me for an evening of good food and stimulating conversation.`);
}

// Inform guests about the limitation
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList5.length > 2) {
    let removedGuest: undefined | string = guestList5.pop(); // Remove the last guest
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages to the remaining guests
console.log("\nInvitations to the remaining guests:");
for (let guest of guestList5) {
    console.log(`Dear ${guest}, you are still invited to dinner. We look forward to seeing you!`);
}

// Empty the list
guestList5 = [];

// Print the empty list
console.log("\nEmpty list:", guestList5);
