//15.Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end 
//of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
// you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

let guestList3: string[] = ["Ahsan", "Hamza", "umer"];

// Print an invitation message to each guest
for (let i = 0; i < guestList3.length; i++) {
    console.log(`Dear ${guestList3[i]}, you are cordially invited to dinner. Please join me for an evening of good food and stimulating conversation.`);
}

// Name of the guest who can't make it
let unableToAttend: string = guestList3[2]; // umer
console.log(`${unableToAttend} regrets that they cannot make it to dinner.`);

// Replace the guest who can't make it with a new guest
guestList3[2] = "Shayan";

console.log("\n");

// Print a second set of invitation messages after modification
for (let i = 0; i < guestList3.length; i++) {
    console.log(`Dear ${guestList3[i]}, you are cordially invited to dinner. Please join me for an evening of good food and stimulating conversation.`);
}