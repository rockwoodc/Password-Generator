//variables for characteristics
var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
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
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password,"password");
    //1. filter out characters not confirmed
    //
  var passwordText = document.querySelector("#password");
        passwordText.value = password;

};

function generatePassword() {
    var userChoice = userOptions();
    console.log(userChoice);
    var typesChars = []
    var actualChars= []
    var finalPassword = []
    
    if (userChoice.confirmSpecial) {
        typesChars = typesChars.concat(specialChars);
        actualChars.push(randomChars(specialChars));
    }
    if (userChoice.confirmNumber) {
        typesChars = typesChars.concat(numberChars);
        actualChars.push(randomChars(numberChars));
    }
    if (userChoice.confirmLowerCase) {
        typesChars = typesChars.concat(lowerChars);
        actualChars.push(randomChars(lowerChars));
    }
    if (userChoice.confirmUpperCase) {
        typesChars = typesChars.concat(upperChars);
        actualChars.push(randomChars(upperChars));
    }

    console.log(actualChars);
    console.log(typesChars);
    for (let i=0; i < userChoice.length; i++) {
        var extraChars = randomChars(typesChars);
        finalPassword.push(extraChars);
    }
    

    for (let i=0; i < actualChars.length; i++) {
        finalPassword[i]= actualChars[i];
    }
    console.log(finalPassword);
    return finalPassword.join('');
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
