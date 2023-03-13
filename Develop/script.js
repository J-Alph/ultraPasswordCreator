// Assignment Code
var generateBtn = document.querySelector("#generate");

var minCharLimit = 7;
var maxCharlimit = 140;

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialPick = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numPick = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];




function generatePassword() {

  passCatcher = [];

  var userAnswer = window.prompt("Enter your the length of password")

  if (!userAnswer) {
    return;
  }

  if (userAnswer < minCharLimit || userAnswer > maxCharlimit) {
    window.alert("please enter a numerical value between 7 & 140")
    return;

  } else if
    (userAnswer => minCharLimit || userAnswer <= maxCharlimit)
    console.log("we in business now")

  if (isNaN(userAnswer)) {
    window.alert ("please enter a numerical value between 7 & 140")
    return;
  } else {




    // var alphaQuestion = confirm("Would you like to add alpha characters to the password")

    // if (alphaQuestion) {
    //   console.log("USer wants to add alphas characters to the value")
    // } else
    //   console.log("user does not want to add number values")



    var lowerQuestion = confirm("Would like the password have lowercase letters")

    if (lowerQuestion) {
      console.log("User wants to add lower case letters")
    } else
      console.log("user does not want to add lower case letters")



    var upperQuestion = confirm("Would like the password have uppercase letters")

    if (upperQuestion) {
      console.log("User wants to add upper case letters")
    } else
      console.log("user does not want to add upper case letters")



    var specialQuestion = confirm("Would like the password have special characters?")

    if (specialQuestion) {
      console.log("User wants to add special characters")
    } else
      console.log("user does not want to special characters")



    var numQuestion = confirm("Would you like to add numbers to the passwor")

    if (numQuestion) {
      console.log("user wants to add numbers to the password")
    } else
      console.log("user does not want to add numbers to the password")


    if (lowerQuestion)
      passCatcher.push(lowerCase);
    else {
      console.log("vargas")
    }

    if (numQuestion)
      passCatcher.push(numPick);
    else {
      console.log("vargas 2")
    }

    if (specialQuestion)
      passCatcher.push(specialPick)
    else {
      console.log("vargas 3")
    }

    if (upperQuestion) {
      passCatcher.push(upperCase)
    } else
      console.log("vargas 4")


    for (let index = 0; index < userAnswer; index++) {

      passCatcher[index] = Math.floor(Math.random() * passCatcher.length) + 1;
    }
    for (index = 0; index < passCatcher.length; index++) {
      console.log(passCatcher.join(""));

    }
  }
  return passCatcher.join("");


}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;



  // for (let index = 0; index < passCatcher.length; index++) {

  //  passCatcher[index] = Math.floor(Math.random()*140) + 1;
  // }
  //  for(index = 0; index < passCatcher.length; index ++){
  //   console.log(passCatcher.join(passCatcher));

  // }
  // var passwordText = passCatcher[index]

  // //  passwordText.textContent = passCatcher.join;
  // }
  // return passCatcher.join();

  passwordText.textContent = password;

};


generateBtn.addEventListener("click", writePassword);



