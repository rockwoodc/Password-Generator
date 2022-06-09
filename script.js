//variables for characteristics
var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars= "!@#$%&*?"
//variable used to combine each together?
// var allChars = numberChars + upperChars + lowerChars + specialChars;

// asking user for specifics for their passwords
function userOptions() {
    var length = prompt("How long would you like your password to be?");
        //if the user enters a password less than 8 characters they will be asked to choose another number
        if (length < 8) {
            alert("Please choose a password length greater than 8 characters.")
            return null;
        } 
        //if the user enters a password greater than 128 characters they will be asked to choose another number
        else if (length > 128) {
            alert("Please choose a password length less than 128 characters.")
            return null;
        }
    //confirm if user needs lowercase letters in password
    var confirmLowerCase = confirm("Does your password need lowercase letters?");
        //user needs lowercase letters
        if (confirmLowerCase) {
             //the characters in lowerChars can be  used
        }
        //user does not need lowercase letters
        else {
             //the characters in lowerChars can NOT be  used 
        }

     //confirm if user needs uppercase letters in password
     var confirmUpperCase = confirm("Does your password need uppercase letters?");
        //user needs uppercase letters
        if (confirmUpperCase) {
            //the characters in upperChars can be used
        }
        //user does not need uppercase letters
        else {
            //the characters in upperChars can NOT be used
        }

    //confrim if user needs numbers in their password
    var confirmNumber = confirm("Does your password need to contain numbers?");
        if (confirmNumber) {
            //the characters in numberChars can be used
            
        }
        else {
           //the characters in numberChars can NOT be used 
        }
    var confirmSpecial = confirm("Does you password need to contain a special character?")
        if(confirmSpecial) {
            //the characters in specialChar can be used
        }
        else {
            //the characters in specialChar can NOT be used
        }
};
userOptions();
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
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
