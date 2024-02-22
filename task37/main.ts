/*37Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
 I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size
  with a different message.*/
  function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size.toUpperCase()} and it has the message: "${message}".`);
}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt("medium");

// Making a shirt of any size with a different message
make_shirt("small", "JavaScript is fun!");