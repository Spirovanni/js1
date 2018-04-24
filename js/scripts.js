//
// // 1. Prompts your user for their name.
// let name = prompt("Enter your first name: ", "");
//
// // 2. Asks for the user's favorite color
// let color = prompt("What is your favorite color, red, orange, yellow, green, blue, pink, purple, black, white, and grey? ", "");
// if (color === "red") {
//     document.write("<h1>Hello, " + name + ", " + color + " is so cool! </h1>");
// } else if (color === "blue") {
//     document.write("<h1>Hello " + name + ", Blue is so average but you are not!</h1>");
// } else if (color === "orange") {
//     document.write("<h1>What up " + name + "? Orange you glad you didn't pick blue!</h1>");
// } else if (color === "yellow") {
//     document.write("<h1>Yellow is smarter than you " + name + "!</h1>");
// } else if (color === "green") {
//     document.write("<h1>What up " + name + "? Green is normal, I think he has envy for you!</h1>");
// } else if (color === "pink") {
//     document.write("<h1>Hello " + name + ", Pink is so becoming!</h1>");
// } else if (color === "purple") {
//     document.write("<h1>Hello " + name + ", Purple is Prince's color!</h1>");
// } else if (color === "black") {
//     document.write("<h1>Hello " + name + ", Black is back!</h1>");
// } else if (color === "white") {
//     document.write("<h1>Hello " + name + ", White is so bright!</h1>");
// } else if (color === "grey") {
//     document.write("<h1>Hello " + name + ", Grey is so Grey!</h1>");
// } else {
//     document.write("<h1>Hello, world!</h1>");
// }


// let arr = ["Christa", "Bob", "Mike", "Rick", "Ryeker"];

// arr.shift();

// let bestEver = arr.slice();
//
// let noCoteacher = arr.slice(1);
//
// let teacherIndex = arr.indexOf("Ryeker");
//
// let backwards = arr.reverse();
//
// bestEver.push('Christa');
//
// console.log(arr, 'ORIGINAL');
// console.log(bestEver, 'SLICED');
// console.log(teacherIndex);
// console.log(noCoteacher);
// console.log(backwards);

// // 1. Prompts your user for their name.
let task = prompt("What is the first thing you need to do this weekend? ", "");
let task2 = prompt("What is the second thing you need to do this weekend? ", "");
let task3 = prompt("What is the third thing you need to do this weekend? ", "");

let task1CompleteDate = prompt("When do you want to finish " + task + "?", "");
let task2CompleteDate = prompt("When do you want to finish " + task2 + "?", "");
let task3CompleteDate = prompt("When do you want to finish " + task3 + "?", "");

let comb1 = [task + " " + task1CompleteDate];
let comb2 = [task2 + " " + task2CompleteDate];
let comb3 = [task3 + " " + task3CompleteDate];

// let tasks = [task,task2,task3];
let combs = [comb1,comb2,comb3];

let text = "";
let i;
for (i = 0; i < combs.length; i++) {
    text += combs[i] + "<br>";
}

// let fullrun = "";
// let i;
// for (i = 0; i < combs.length; i++) {
//     fullrun += combs[i] + "<br>";
// }

document.write(text);
// document.write(combs);
document.write(comb1);
document.write(comb2);
document.write(comb3);