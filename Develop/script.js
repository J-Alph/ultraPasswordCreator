// Assignment Code
var generateBtn = document.querySelector("#generate");



var minCharLimit = 7;
var maxCharlimit = 140;

var alphaPick = "abcdefghijklmnopqrstuvwxyz".split("");
var specialPick = "@!#$%^&*".split("");
// var caseUpper = nU;
// var caseLower = nL;
var numPick = [1,2,3,4,5,6,7,8,9,0];

passCatcher = [];

// var nU =  toUpperCase(){
//   toLowerCase.alphaPick;
// }

// var nL = toLowerCase()
// {
//   toLowerCase(alphaPick);
// }

// Write password to the #password input



function writePassword() {

  var userAnswer = window.prompt("Enter your choice of length of password")
  // console.log("its working " + userAnswer);

  if (!userAnswer) {
    return;
  }

  

  if (userAnswer < minCharLimit || userAnswer > maxCharlimit  ) {
    window.alert("please enter a valid numeric character limit between 7 & 140")
    return;
  
  } else if
    (userAnswer => minCharLimit || userAnswer <= maxCharlimit)
    console.log("we in business now")
    
  // if(userAnswer !== numPick){
  //   window.alert("please enter a valid numeric character ******limit between 7 & 140")
  //   return ("not a valid answer");
  // }else
  //   console.log("something happend")





    var alphaQuestion = confirm("Would you like to add alpha characters to the password")

    if(alphaQuestion){
    console.log("USer wants to add alphas characters to the value") 
      
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

    var specialQuestion =confirm ("Would like the password have special characters?")

    if(specialQuestion){
      console.log("User wants to add special characters")
    }else
    console.log("user does not want to special characters")

    var numQuestion = confirm ("Would you like to add numbers to the passwor")

    if(numQuestion){
      console.log("user wants to add numbers to the password")
    }
      console.log("user does not want to add numbers to the password")

    // var index = Math.floor(math.random() * )


    // var userVallenght = userAnswer.valueOf(Number);
    // // randomPass = userVallenght

    // if (alphaQuestion)
    

    console.log(numPick)

 

  var password = generatePassword();
  function generatePassword(){
  
    passCatcher = [];

    if(alphaQuestion)
      passCatcher.push(alphaPick);
      else{
        console.log("vargas")
      }
    //   if (alphaQuestion)
  //     passwordText.textContent = alphaPick.[Math.floor]
  
  if (numQuestion)
    passCatcher.push(numPick);
    else{
      console.log("vargas 2")
    }

  }

  if(specialQuestion)
    passCatcher.push(specialPick)
    else{
      console.log("vargas 3")
    
    }
    

  var passwordText = document.querySelector("#password");
  passwordText.textContent = passCatcher;
      console.log(passCatcher);

  var random = Math.floor(Math.random()*userAnswer) +1;
   
  console.log(userAnswer + " This is input from user ");
  console.log(random + " This is random ");

  }

  for (let index = 0; index < passCatcher.length; index++) {
    passCatcher[index] = Math.floor(Math.random()*userAnswer) +1
    passwordText.textContent = passCatcher;
    console.log(passCatcher);
  }
//   var index = Math.floor(Math.random() * passCat.length)

//  window.alert("Password"); 





generateBtn.addEventListener("click", writePassword);

  

