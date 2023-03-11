// Assignment Code
var generateBtn = document.querySelector("#generate");



var minCharLimit = 7;
var maxCharlimit = 140;

var alphaPick = "abcdefghijklmnopqrstuvwxyz".split("");
var specialPick = "!@#$%^&*".split();
var caseUpper = document.body.setAttribute("div", "Uppercase");
var caseLower = document.body.setAttribute("div", "Lowercase");
var numPick = "1234567890".split("");
var passchars = [];




// Write password to the #password input



function writePassword() {
  
  var userAnswer = window.prompt("Enter your choice of length of string")


  console.log("its working " + userAnswer);

  var response = "Thanks for playing" + generateBtn.value + "weeee" + generateBtn.value;

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.textContent = response;

  // if (generatePassword){
  //   console.log("happy day")
  // }
  //   console.log("no")




  //   var letterPick = confirm("Say something good");
  //     console.log("Use lower case" , letterPick);
  //     if(letterPick){
  //       passchars = passchars.concat(alphaPick)
  //     }
  //     console.log(passchars);



  //  passwordText.textContent = "This was made today." + passwordText + "."

  //  document.body.appendChild(passwordText);

}
// passwordText.textContent = "This is your result " + password + ".";

//   passwordText.value = password;

//   document.body.appendChild(passwordText);

//   document.querySelector("Your Secure Password")


// var nextQuestion = confirm("how many character do you need")


//   var randomNumber = Math.floor(math.random() * passChoices.length)

// }

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


