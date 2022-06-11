//variables for characteristics
var numberChars = [012345678,"9"]; //FIXXXXXX
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars= "!@#$%&*?"
//variable used to combine each together?


// asking user for specifics for their passwords
function userOptions() {
    var length = prompt("How long would you like your password to be?");
        //if the user enters a password less than 8 characters they will be asked to choose another number
        if (length < 8) {
            alert("Please choose a password length greater than 8 characters.")
            return null;
        } 
        //if the user enters a password greater than 128 characters they will be asked to choose another number
        if (length > 128) {
            alert("Please choose a password length less than 128 characters.")
            return null;
        }
    //confirm if user needs lowercase letters in password
    var confirmLowerCase = confirm("Does your password need lowercase letters?");
        

     //confirm if user needs uppercase letters in password
     var confirmUpperCase = confirm("Does your password need uppercase letters?");
        

    //confrim if user needs numbers in their password
    var confirmNumber = confirm("Does your password need to contain numbers?");
        
    var confirmSpecial = confirm("Does you password need to contain a special character?")

    var allChars = {
        length:length,
        confirmLowerCase:confirmLowerCase,
        confirmUpperCase:confirmUpperCase,
        confirmNumber:confirmNumber,
        confirmSpecial:confirmSpecial
    }
    return allChars;
};

function randomChars(Array) {
    var randomIndex = Math.floor(Math.random() * Array.length);
    var randomElement = Array[randomIndex];
    return randomElement;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    //1. filter out characters not confirmed
    //
  var passwordText = document.querySelector("#password");

//choose at least one type of character from each prompt that is confirmed
//Password is displayed on screen

  passwordText.value = password;

}

function generatePassword() {
    var userChoice = userOptions();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
