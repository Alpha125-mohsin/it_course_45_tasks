/*41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicians = ["Merlin", "Houdini", "David Blaine", "Penn", "Teller"];
// Calling the function to show the magicians
show_magicians(magicians);
