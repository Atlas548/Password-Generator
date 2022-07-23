// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Statement Variables
var passwordChar;
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

  if ((chooseLength < 8) || (chooseLength > 128)) {
    alert("You must choose between a number between 8 and 128");
    return;
  }
  
  else {
    var specialConfirm = confirm("Do you want special characters in your password?");
    var numberConfirm = confirm("Do you want numbers in your password?");
  }

    // function for prompts and confirms
    function specialConfirm() {
    window.confirm(`do you want special characters?`);
  }

    function numberConfirm() {
    window.confirm(`do you want numbers in your password?`);
  }

    function upperConfirm() {
    window.confirm(`do you want upper characters?`);
  }

    function lowerConfirm() {
    window.confirm(`Do you want lower case numbers`);
  }


     if (numberConfirm()) {
      passArray = passArray.concat(numberChars);
      console.log(passArray);

    } if (specialConfirm()) {
      passArray = passArray.concat(specialChars);
      console.log(passArray);

    } if (lowerConfirm()) {
      passArray = passArray.concat(lowerChars);
      console.log(passArray);
    
    } if (upperConfirm()) {
      passArray = passArray.concat(upperChars);
      console.log(passArray);
    
    }
  }

  for (var i = 0; i < writePassword; i++) {
    var passRandom = Math.floor(Math.random() * passArray);
    password.push(passRandom);
  }


