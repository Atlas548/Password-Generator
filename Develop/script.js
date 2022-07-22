// Assignment Code
var generateBtn = document.querySelector("#generate");

var passArray = [];
var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "~!#$%&*-+|";

// function for prompts and confirms
function specialChars() {
  window.confirm(`do you want special characters?`);
}

function numberChars() {
  window.confirm(`do you want numbers in your password?`);
}

function upperChars() {
  window.confirm(`do you want upper characters?`);
}

function lowerChars() {
  window.confirm(`Do you want lower case numbers`);
}

// Write password to the #password input
function writePassword() {

  // Parameters of the generate password
  function generatePassword() {

    var passwordLength = window.prompt(`How many characters would you like in your password`);
    
    if (passwordLength < 7 || passwordLength > 100) {
      window.alert(`Must be a minimum of 7 and less than 100 characters, try again`);
      return;
    
    } if (!passwordLength) {
      window.alert(`please enter how many characters you would like in your password`);
      return;
    
    } if (numberChars()) {
      passArray = passArray.concat(numberChars);
      console.log(passArray);

    } if (specialChars()) {
      passArray = passArray.concat(specialChars);
      console.log(passArray);

    } if (lowerChars()) {
      passArray = passArray.concat(lowerChars);
      console.log(passArray);
    
    } if (upperChars()) {
      passArray = passArray.concat(upperChars);
      console.log(passArray);
    
    } console.log(passArray);
  }

  for (var i = 0; i == passwordLength; i++) {
    var passRandom = Math.floor(Math.random() * passArray);
  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
