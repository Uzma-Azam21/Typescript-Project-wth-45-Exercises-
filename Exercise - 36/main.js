// EXERCISE - 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, printMessage) {
    console.log("I selected ".concat(size, " size shirt with ").concat(printMessage, " prints on it."));
}
make_shirt("Medium", "Keep Calm and Code on");
