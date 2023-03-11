// Assignment Code
var generateBtn = document.querySelector("#generate");

var passChoices = ["1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*"]




 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 
  

 
  // generatePassword =document.createElement(passChoices);

  passwordText.value = password;

  

  var randomNumber = Math.floor(math.random() * passChoices.length)
 
}
  // var userAnswer = window.prompt("Enter your choice of length of string")
//  window.alert("Password"); 

//   if(!passChoices){
//     alert("bad bad!")
//     return;
//   } 

//   if(!passchoices.includes(passChoices.includes())){
//     alert("you win");
//   }
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passQuest = prompt("please enter your choice");
