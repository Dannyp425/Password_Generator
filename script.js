// Assignment code here


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

function generatePassword() {
  var options = [];
  var lcAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
  var ucAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
  var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var special = ['', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '=', '?', '@', '~'];
  
  var passwordLength = window.prompt("How long do you want your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your passowrd does not meet the criteria."); 
  }

  var lowerCase = window.confirm("Do you want to include lower case letters? Type y for yes and n for no.");
  if (lowerCase){
  window.alert("We'll include lower case letters!");
  for(i=0; i<passwordLength; i++){
    var lowerRandom = Math.floor(Math.random() * lcAlphabet.length);
    console.log(lowerRandom);
    options.push(lcAlphabet[lowerRandom]);
  }
  }
  
  var upperCase = window.confirm("Do you want to include upper case letters? Type y for yes and n for no.");
  if (upperCase){
  window.alert("We'll include upper case letters!");
  for(i=0; i<passwordLength; i++){
    var upperRandom = Math.floor(Math.random() * ucAlphabet.length);
    console.log(upperRandom);
    options.push(ucAlphabet[lowerRandom]);
  }
}

var numb = window.confirm("Do you want to include numbers? Type y for yes and n for no.");
  if (numb){
  window.alert("We'll include numbers!");
  for(i=0; i<passwordLength; i++){
    var numRandom = Math.floor(Math.random() * num.length);
    console.log(numRandom);
    options.push(num[numRandom]);
  }
}

var spec = window.confirm("Do you want to include special characters? Type y for yes and n for no.");
  if (spec){
  window.alert("We'll include special characters!");
  for(i=0; i<passwordLength; i++){
    var specRandom = Math.floor(Math.random() * special.length);
    console.log(specRandom);
    options.push(special[lowerRandom]);
  }
}
  if (!lowerCase && !upperCase && !numb && !spec) {
    window.alert("You need to select at least one type");
    generatePassword(); 
  }
console.log(options);
let shuffled = options.sort(() => Math.random() - 0.5);
  shuffled = shuffled.join("");
  shuffled = shuffled.slice(0, passwordLength);
  return shuffled;
}