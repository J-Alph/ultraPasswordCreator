// Assignment Code for variables used in fuctions
var generateBtn = document.querySelector("#generate");

var minCharLimit = 8;
var maxCharlimit = 128;

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


// Defining the fuctions "generatePassword" parameters

function generatePassword() {

  var passCatch = [];
  var passwordarray = [];

  // Defined a series of prompts for the user to input choices for their passwrod

  var userAnswer = window.prompt("Enter your the length of password")

  if (!userAnswer) {
    return;
  }

  if (userAnswer < minCharLimit || userAnswer > maxCharlimit) {
    window.alert("please enter a numerical value between 8 & 128")
    return;

  } else if
    (userAnswer => minCharLimit || userAnswer <= maxCharlimit)
    console.log("we in business now")

  if (isNaN(userAnswer)) {
    window.alert("please enter a numerical value between 7 & 140")
    return;
  } else {


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



    var numQuestion = confirm("Would you like to add numbers to the password")

    if (numQuestion) {
      console.log("user wants to add numbers to the password")
    } else
      console.log("user does not want to add numbers to the password")

    //Adds input to the array based on input

    if (lowerQuestion)
      passCatch = passCatch.concat(lowerCase);
    else {
      console.log("option no")
    }

    if (numQuestion)
      passCatch = passCatch.concat(numSet);
    else {
      console.log("option2 no")
    }

    if (specialQuestion)
      passCatch = passCatch.concat(specialSet)
    else {
      console.log("option3 no")
    }

    if (upperQuestion) {
      passCatch = passCatch.concat(upperCase)
    } else
      console.log("option4 no")

    console.log(passCatch);


    for (var index = 0; index < userAnswer; index++) {

      var randomindex = Math.floor(Math.random() * passCatch.length);
      var randomchar = passCatch[randomindex];

      passwordarray.push(randomchar);


    }

  }
  // Returns the results of the function without separators
  console.log(passwordarray);
  return passwordarray.join("");


}

// function for the password button upon press- password will be input in provided space
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.textContent = password;

};


generateBtn.addEventListener("click", writePassword);



