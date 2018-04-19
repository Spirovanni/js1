
// 1. Prompts your user for their name.
let name = prompt("Enter your first name: ", "");

// 2. Asks for the user's favorite color
let color = prompt("What is your favorite color, red, orange, yellow, green, blue, pink, purple, black, white, and grey? ", "");
if (color === "red") {
    document.write("<h1>Hello, " + name + ", " + color + " is so cool! </h1>");
} else if (color === "blue") {
    document.write("<h1>Hello " + name + ", Blue is so average but you are not!</h1>");
} else if (color === "orange") {
    document.write("<h1>What up " + name + "? Orange you glad you didn't pick blue!</h1>");
} else if (color === "yellow") {
    document.write("<h1>Yellow is smarter than you " + name + "!</h1>");
} else if (color === "green") {
    document.write("<h1>What up " + name + "? Green is normal, I think he has envy for you!</h1>");
} else if (color === "pink") {
    document.write("<h1>Hello " + name + ", Pink is so becoming!</h1>");
} else if (color === "purple") {
    document.write("<h1>Hello " + name + ", Purple is Prince's color!</h1>");
} else if (color === "black") {
    document.write("<h1>Hello " + name + ", Black is back!</h1>");
} else if (color === "white") {
    document.write("<h1>Hello " + name + ", White is so bright!</h1>");
} else if (color === "grey") {
    document.write("<h1>Hello " + name + ", Grey is so Grey!</h1>");
} else {
    document.write("<h1>Hello, world!</h1>");
}