// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numberCase = "1234567890"
const specCase = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function to get value for password
function generatePassword() {
  var allChar = ``;
  var passResult = ``;

  //length?
  var lengthChoice = window.prompt(`Choose password length: enter a number between 8 and 128`, ``);

  //validate if lengthChoice is within parameters  
  if (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
    return (window.alert(`Must Enter Number Between 8 and 128`), (writePassword = `INVALID ENTRY`))
  }

  //uppercase?
  var upperChoice = window.confirm(`Include UPPERCASE?`)
  //if yes
  if (upperChoice) {
    allChar += upperCase;
  }

  //lowercase?
  var lowerChoice = window.confirm(`Include lowercase?`)
  //if yes
  if (lowerChoice) {
    allChar += lowerCase;
  }

  //numbers?
  var numberChoice = window.confirm(`Include Numbers?`)
  //if yes
  if (numberChoice) {
    allChar += numberCase
  }

  // special?
  var specChoice = window.confirm(`Include Special Characters?`)
  //if yes
  if (specChoice) {
    allChar += specCase
  }

  //validate at least one choice is made
  if (allChar.length < numberCase.length) {
    return (window.alert(`Must Choose at least one of: UPPERCASE, lowercase, Numbers, Special Characters`), (writePassword = `INVALID ENTRY`))
  }

  //modify passResult as a random string from allChar
  for (let i = 0; i < lengthChoice; i++) {
    passResult += allChar[Math.floor(Math.random()*allChar.length)];
  }
      
  // return passResult
  return passResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
