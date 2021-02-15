// Assignment code here
function generatePassword() {
  var options = [];
  var lcAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var ucAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var special = [' ', '!', '$', '%', '&', '?', '@', '~'];

//Get user input for length
var passwordLength = window.prompt("How long do you want your password to be? Must be between 8 and 128 characters");
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("That was not a valid option. Please try again.");
  passwordLength = 0;
  return " ";
}

//Ask if they want to use lower case letters in their password and if so add it to the array
var lowerCase = window.confirm("Do you want to include lower case letters?");
  if (lowerCase) {
  window.alert("We'll include lower case letters!");
    for(i=0; i<passwordLength; i++){
      var lowerRandom = Math.floor(Math.random() * (lcAlphabet.length-1));
      options.push(lcAlphabet[lowerRandom]);
    }
  }

//Ask if they want to use upper case letters in their password and if so add it to the array
var upperCase = window.confirm("Do you want to include upper case letters?");
  if (upperCase) {
  window.alert("We'll include upper case letters!");
    for(i=0; i<passwordLength; i++){
    var upperRandom = Math.floor(Math.random() * (ucAlphabet.length-1));
      options.push(ucAlphabet[upperRandom]);
    }
  }

//Ask if they want to use numbers in their password and if so add it to the array
var numbs = window.confirm("Do you want to include numbers?");
  if (numbs) {
  window.alert("We'll include numbers!");
    for(i=0; i<passwordLength; i++){
      var numRandom = Math.floor(Math.random() * (num.length-1));
      options.push(num[numRandom]);
    }
  }

//Ask if they want to use lower case letters in their password and if so add it to the array
var spChar = window.confirm("Do you want to include special characters?");
  if (spChar) {
  window.alert("We'll include special characters!");
    for(i=0; i<passwordLength; i++){
      var spRandom = Math.floor(Math.random() * (special.length-1));
      options.push(special[spRandom]);
    }
  }

//Confirm that at least one of the criteria was selected, shuffle array, and return generated password
if (!lowerCase && !upperCase && !numb && !spec) {
  window.alert("You need to select at least one type! Please try again");
  return 
} else {
  let shuffled = options.sort(() => Math.random() - 0.5);
      shuffled = shuffled.join("");
      shuffled = shuffled.slice(0, passwordLength);
      return shuffled;
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);