// var myName = "Xavier";
// var myLastName = "Martinez";

// var myHistory = "I want brush up my JavaScript in order to get better at Angular5 for a project.  In order to compete in 59Days of Code.";
// window.alert(myHistory);

// var myName = "Xavier";
// myName = new String(myName);
// console.log(myName.toUpperCase());

// var myName = 43;
// console.log(typeof (myName));
// console.log(myName);


// console.log(myName.toUpperCase());
// var myName = "Martinez";
//
// var  test;
//
// console.log(test);

// var myName = "Martinez";
//
// console.log(myName, "one");
// {
//     let myName = "Xavier";
//     console.log(myName, "Two");
// }
//
// console.log(myName, "Three");

// const myName = "Martinez";
//
// console.log(myName, "one");
// {
//     let myName = "Xavier";
//     console.log(myName, "Two");
// }
//
// console.log(myName, "Three");


//Asks for the user's first name

let firstname = prompt("Enter your first name: ", "");

// 1. Asks for the user's last name
let lastname = prompt("Enter your last name: ", "");
if (confirm("Your name is " + firstname + " " + lastname)) {
    // 2. Logs the user's first name to the console
    console.log(firstname);
    // 3. Alerts the user's last name
    alert(lastname);
    document.write("<h1>Hello, " + firstname + " " + lastname +"!</h1>");
    console.log("Hello", firstname + " " + lastname);
} else {
    document.write("<h1>Hello, world!</h1>");
}

// 4. Confirms the user's birthday and alerts the resulting birthday

let birthday = prompt("When were you born?: ", "");
let rightnow = new Date(birthday);
if (confirm("Your birthday is " + rightnow + ", correct?")) {
    alert(rightnow);
} else {
    alert("Come on now! Everyone has to have a birthday!");
}