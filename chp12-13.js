//question 1//
let input = prompt("Enter a character: ");
let asciiCode = input.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
  alert("The input is a number");
} else if (asciiCode >= 65 && asciiCode <= 90) {
  alert("The input is an uppercase letter");
} else if (asciiCode >= 97 && asciiCode <= 122) {
  alert("The input is a lowercase letter");
} else {
  alert("The input is a special character");
}

//question 2//
let num1 = parseInt(prompt("Enter the first integer: "));
let num2 = parseInt(prompt("Enter the second integer: "));

if (num1 > num2) {
  alert(`The larger number is: ${num1}`);
} else if (num1 < num2) {
  alert(`The larger number is: ${num2}`);
} else {
  alert("The two integers are equal");
}

//question 3//
let num = parseInt(prompt("Enter a number: "));

if (num > 0) {
  alert(`The number ${num} is positive`);
} else if (num < 0) {
  alert(`The number ${num} is negative`);
} else {
  alert(`The number ${num} is zero`);
}


//question 4//
let output = prompt("Enter a character: ").toLowerCase();

if (output === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') {
  alert(true);
} else {
  alert(false);
}

//question 5//
let correctPassword = "secret"; // Store correct password in a JS variable

let userInput = prompt("Enter your password: "); // Asks user to enter his/her password

if (userInput === null || userInput === "") {
  alert("Please enter your password");
} else if (userInput === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

//question 6//
let greeting;
let hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


// question 7//
let time = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");

if (time >= 600 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else {
  alert("Good night!");
}

