// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChars = ["~", "!", "@", "#", "$", "%", "&", "*", "(", ")"];

// Statement Variables
var passwordChar ;
var chooseLength = "";
var passwordInput = [];

// Writing password to the input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Parameters of the generate password
function generatePassword() {
  var chooseLength = window.prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log(chooseLength);

  // User prompted to choose a length between 8 & 128 
  if ((chooseLength < 8) || (chooseLength > 128)) {
    alert("You must choose between a number between 8 and 128");
    return;
  }
  // user confirming via the prompts
  else {
    var specialConfirm = confirm("Do you want special characters in your password?");
    var numberConfirm = confirm("Do you want numbers in your password?");
    var upperConfirm = confirm("Do you want uppercase letters in your password?");
    var lowerConfirm = confirm("Do you want lowercase numbers in your password?");
  };

  // Variations of the user choosing on confirming what they want in their password 
  if (numberConfirm && specialConfirm && upperConfirm && lowerConfirm) {
    passwordChar = numberChars.concat(specialChars, upperChars, lowerChars);
  } else if (numberConfirm && lowerConfirm && specialConfirm) {
    passwordChar = numberChars.concat(specialChars, lowerChars);
  } else if (specialConfirm && upperConfirm && numberConfirm) {
    passwordChar = numberChars.concat(upperChars, specialChars);
  } else if (upperConfirm && lowerConfirm && specialConfirm) {
    passwordChar = lowerChars.concat(upperChars, lowerChars);
  } else if (numberConfirm && lowerConfirm && upperConfirm) {
    passwordChar = numberChars.concat(upperChars, lowerChars);
  } else if (specialConfirm && upperConfirm) {
    passwordChar = specialChars.concat(upperChars);
  } else if (specialConfirm && lowerConfirm) {
    passwordChar = specialChars.concat(lowerChars);
  } else if (specialConfirm && numberConfirm) {
    passwordChar = specialChars.concat(numberChars);
  } else if (numberConfirm && lowerConfirm) {
    passwordChar = numberChars.concat(lowerChars);
  } else if (numberConfirm && upperConfirm) {
    passwordChar = numberChars.concat(upperChars);
  } else if (upperConfirm && lowerConfirm) {
    passwordChar = upperChars.concat(lowerChars);
  } else if (specialConfirm) {
    passwordChar = specialChars;
  } else if (numberConfirm) {
    passwordChar = numberChars;
  } else if (lowerConfirm) {
    passwordChar = lowerChars;
  } else if (upperConfirm) {
    passwordChar = upperChars;
  } else {
    alert("You must choose atleast one criteria");
    return;
  }
   

  // generating randomized characters
  console.log(passwordChar);
  for (var i = 0; i <chooseLength; i++) {
    var randOptions = passwordChar[Math.floor(Math.random() * passwordChar.length)];
    passwordInput.push(randOptions);
  }
  
  // sends the password to HTML 
  var password = passwordInput.join("");
  console.log(password);
  return password;


}
