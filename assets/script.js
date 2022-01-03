// the Password generator should meet criterias: 8-128 symbols, lowercase, uppercase, numbers, special characters, randomized. must include symbols from 1-4 arrrays

// start Coding
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// variables (arrays) for lowercase, uppercase, numbers and special character
let lcLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let ucLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// this variable will contain user's data for a password
let pdLength = "";

// variables for user's criterias
let addLcLetter;
let addUcLetter;
let addNumber;
let addSpecChar;

// ask user how many symbols should be in the password
function generatePassword() {
  let pdLength = prompt("Enter a number of symbols between 8 and 128");

  // if user clicks cancel button the message pops up
  if (pdLength === null) {
    alert("Try again!");
    return null;
  }
  // if user enters not a numeric symbol - ASK TUTOR
  // if (prompt isNaN) alert("Must be a number!"); return null;

  // this should make user to select a proper lenght
  if (pdLength < 8 || pdLength > 128) {
    alert("If it is less than 8 or greater than 128, it is not going to work!");
    pdLength = prompt("Enter number of symbols between 8 and 128");
  }

  // user confirms desired criteria
  let addLcLetter = confirm("Add lowercase letters?");
  let addUcLetter = confirm("Add uppercase letters?");
  let addNumber = confirm("Add numbers?");
  let addSpecChar = confirm("Add special characters?");

  // loops user if no criteria was chosen
  if (addLcLetter === false && addUcLetter === false && addNumber === false && addSpecChar === false) {
    alert("If you want your password, choose something!");

    addNumber = confirm("Add numbers?");
    addSpecChar = confirm("Add special characters?");
    addLcLetter = confirm("Add lowercase letters?");
    addUcLetter = confirm("Add uppercase letters?");
  }

  // New variable for saving user's input
  let userPassword = [];
  // IF user decides to use lowercase letters in the userPassword
  if (addLcLetter) {
    userPassword = userPassword.concat(lcLetter);
  }
  // IF user decides to use uppercase letters in the userPassword
  if (addUcLetter) {
    userPassword = userPassword.concat(ucLetter);
  }
  // IF user decides to use Numbers in the userPassword
  if (addNumber) {
    userPassword = userPassword.concat(number);
  }
  // IF user decides to use Special Characters in the userPassword
  if (addSpecChar) {
    userPassword = userPassword.concat(specChar);
  }

  //   newPassword is a variable filled with a data based on a FOR loop. To select random symbols from arrays we use [Math.floor(Math.Random() * userPassword.length)] function
  let newPassword = "";
  for (let i = 0; i < pdLength; i++) {
    newPassword = newPassword + userPassword[Math.floor(Math.random() * userPassword.length)];
  }
  return newPassword;
}

// display password (using #password)
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
