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

  var userAnswer = window.prompt("Enter your choice of length of password")
  // console.log("its working " + userAnswer);

  if (!userAnswer) {
    return;
  }


  if (userAnswer < minCharLimit || userAnswer > maxCharlimit) {
    window.alert("please enter a valid character limit between 7 & 140")
    return;
  
  } else if
    (userAnswer => minCharLimit || userAnswer <= maxCharlimit)
    console.log("we in business now")
    
    var alphaQuestion = confirm("Would you like to add numeric values")
   
    if(alphaQuestion){
    console.log("USer wants to add numeric value") 
    } else 
    console.log("user does not want to add number values")

    var lowerQuestion =confirm ("Would like the password have lowercase letters")

    if(lowerQuestion){
      console.log("User wants to add lower case letters")
    }else
    console.log("user does not want to add lower case letters")


    var upperQuestion =confirm ("Would like the password have uppercase letters")

    if(upperQuestion){
      console.log("User wants to add upper case letters")
    }else
    console.log("user does not want to add upper case letters")

    var specialQuestion =confirm ("Would like the password have lowercase letters")

    if(specialQuestion){
      console.log("User wants to add special characters")
    }else
    console.log("user does not want to special characters")


  var response = userAnswer;

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


