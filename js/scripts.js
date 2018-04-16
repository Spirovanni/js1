// 1. Asks for the user's first name
let firstname = prompt("Enter your first name: ", "");

// 2. Asks for the user's last name
let lastname = prompt("Enter your last name: ", "");
if (confirm("Your name is " + firstname + " " + lastname)) {
    // 3. Logs the user's first name to the console
    console.log(firstname);
    // 4. Alerts the user's last name
    alert(lastname);
    document.write("<h1>Hello, " + firstname + " " + lastname +"!</h1>");
    console.log("Hello", firstname + " " + lastname);
} else {
    document.write("<h1>Hello, world!</h1>");
}

// 5. Confirms the user's birthday and alerts the resulting birthday

let birthday = prompt("When were you born?: ", "");
let rightnow = new Date(birthday);
if (confirm("Your birthday is " + rightnow + ", correct?")) {
    alert(rightnow);
} else {
    alert("Come on now! Everyone has to have a birthday!");
}