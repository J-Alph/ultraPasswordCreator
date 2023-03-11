// Assignment Code
var generateBtn = document.querySelector("#generate");

var passChoices = ["1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*"]

var minChar = 7;
var maxCharlimit = 140;
var numPick = ["1234567890"];
var alphaPick = ["abcdefghijklmnopqrstuvwxyz"]
var specialPick = ["!@#$%^&*"];
var caseUpper = document.body.setAttribute("div", "Uppercase");
var caseLower = document.body.setAttribute("div", "Lowercase");






 // Write password to the #password input



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 


 
generatePassword = document.createElement(passChoices);

// passwordText.textContent = "This is your result " + password + ".";

  // passwordText.value = password;

  // document.body.appendChild(passwordText);
  
  // document.querySelector("Your Secure Password")


// var nextQuestion = confirm("how many character do you need")


  // var randomNumber = Math.floor(math.random() * passChoices.length)
 
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
