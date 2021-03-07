// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numberCase = "1234567890"
const specCase = "!@#$%^&*(),.?~-+_="


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
  // var lengthChoice = Number(window.prompt(`Choose password length: enter a number between 8 and 128`, ``));
  console.log(lengthChoice)
  console.log(typeof lengthChoice)


  //validate if lengthChoice is number
  // if (isNaN(lengthChoice)) {
  //   return (window.alert(`Must Enter Valid Number`), (writePassword = `INVALID ENTRY`))

  // //validate if lengthChoice is within parameters  
  // } else 
  if (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
    return (window.alert(`Must Enter Number Between 8 and 128`), (writePassword = `INVALID ENTRY`))
  }

  //uppercase?
  var upperChoice = window.confirm(`Include UPPERCASE?`)
  console.log(upperChoice);
  //if yes
  if (upperChoice) {
    allChar += upperCase;
  }
  console.log(allChar)

  //lowercase?
  var lowerChoice = window.confirm(`Include lowercase?`)
  console.log(lowerChoice);
  //if yes
  if (lowerChoice) {
    allChar += lowerCase;
  }
  console.log(allChar)

  console.log(lengthChoice)
  //numbers?
  var numberChoice = window.confirm(`Include Numbers?`)
  console.log(numberChoice)
  //if yes
  if (numberChoice) {
    allChar += numberCase
  }
  console.log(allChar)

  // special?
  var specChoice = window.confirm(`Include Special Characters?`)
  console.log(specChoice)
  //if yes
  if (specChoice) {
    allChar += specCase
  }
  console.log(allChar)

  //validate at least one choice is made
  if (allChar.length < specCase.length) {
    return (window.alert(`Must Choose at least one of: UPPERCASE, lowercase, Numbers, Special Characters`), (writePassword = `INVALID ENTRY`))
  }

  //create array of possible characters
  var charArray = allChar.split(``);
  console.log(charArray)

  //modify passResult as a random string from charArray
  const charArraylength = charArray.length;
    for (let i = 0; i < lengthChoice; i++) {
      passResult += allChar[Math.floor(Math.random()*allChar.length)];
    }
      
    
  // return passResult
  console.log(passResult)
  console.log(passResult.length)
  return passResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
