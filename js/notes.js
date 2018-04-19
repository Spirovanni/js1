// let myAge = 43;
// document.getElementById("demo").innerHTML = (myAge !== 40);

// For loops

// for ( let i = 0; i < 10; i++) {
//     console.log(i);
// }

// function randomvariable() {
//     let randomvariable = Math.floor(Math.random() * 21);
//     document.getElementById("demo").innerHTML += randomvariable + "-";
// }
//
// function launchfunctions() {
//     let count = 0;
//     while (count < 10) {
//         randomvariable();
//         count++;
//     }
// }
//
// for (let i = 0; i < 10 || i <15; i++) {
//     if (!(i%2===0))
//         console.log(i);
// }


// let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";
// let i;
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// Declare a var and set it equal to any string.
// let favoriteBook = "Streetcar Named Desire";

// Declare a second var and call new String() on the same string (this will create an instance of a JS string object.)
// let eBook = new String(favoriteBook);

// Use the logical operators and a third var to determine if they are strictly equal.
// let isEqual = (favoriteBook == eBook);
// console.log(isEqual);
// isEqual = (favoriteBook === eBook);
// console.log(isEqual);

// Now use the logical operators and a fourth var to determine if they are loosely equal.
// Why did you get the result you got?

// let yourName = prompt('what\'s your name?');
//
// console.log(yourName.length);

// Objects.  Objects are different even if the value is the same.

// let obj1 = {
//     name: "Ryker"
// };
//
// let obj2 = {
//     name: "Ryker"
// };
//
// console.log(obj1 === obj2);



// let obj1 = {
//     name: "Ryker"
// };
//
// let obj2 = {
//     name: "Ryker"
// };
//
// let yourNum = prompt();
//
// console.log(obj1 === obj2);

// JavaScript Demo: Standard built-in objects - isNaN()

// function milliseconds(x) {
//     if (isNaN(x)) {
//         return 'Not a Number!';
//     }
//     return x * 1000;
// }
//
// console.log(milliseconds('100F'));
// expected output: "Not a Number!"

// console.log(milliseconds('0.0314E+2'));
// expected output: 3140

// ParseInt JavaScript Demo: Standard built-in objects - parseInt()

// function roughScale(x, base) {
//     let parsed = parseInt(x, base);
//     if (isNaN(parsed)) { return 0 }
//     return parsed * 100;
// }

// console.log(roughScale(' 0xF', 16));
// expected output: 1500

// console.log(roughScale('321', 2));
// expected output: 0


// Final practice


// The word 'Float' stands for "floating point number" which is the technical name for a decimal number. That example has also shown how we can solve our problem with the addition program you saw above. Change the program to the following, and it should work properly:
// Here we have included one instruction inside another. The prompt() instruction produces a string, and instead of storing this string in a variable, it is handed straight to the parseFloat() instruction which turns it into a decimal number. The string entered is never actually stored anyway, only the floating point number.


// let first_number = prompt("Enter the first number", "");
//
// let second_number = prompt("Enter the second number", "");
//
// first_number = parseInt(first_number);
// second_number = parseInt(second_number);
//
// let answer = first_number + second_number;
//
// document.write("The answer is " + (answer + 42) + "!<br>");
//
// document.write("The answer is " + (answer - 42) + "!<br>");
//
// document.write("The answer is " + (answer * 42) + "!<br>");
//
// document.write("The answer is " + (answer / 42) + "!<br>");