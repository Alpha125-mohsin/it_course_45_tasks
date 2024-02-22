/*42. Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians
 by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/
 function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Array of magician's names
let magicians: string[] = ["Merlin", "Houdini", "David Blaine", "Penn", "Teller"];

// Call make_great() to modify the magician's names
make_great(magicians);

// Calling the function to show the magicians after modification
show_magicians(magicians);