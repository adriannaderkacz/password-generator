//Added array of special characters to be included in password
var specialCharacters = [
    '.',
    ',',
    '?',
    '@',
    '%',
    '+',
    '=',
    '/',
    '|',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '>',
    '<',
    '"'
]

//Added array of numeric character to be included in password
var numericCharacters = ['0', '2', '3', '4', '5', '6', '7', '8', '9'];

//Added array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

//Added array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

var passwordLength;
var options;

//Added a function to request user input for password options
function getPasswordOptions() {
    passwordLength = prompt("How many characters would you like your password to contain?");
    console.log(passwordLength);

    if (passwordLength < 10) {
        alert("Please ensure your password is at least 10 characters long.");
    } else if (passwordLength > 50) {
        alert("Please limit your password to a maximum of 50 characters.");
    } else {
        var specialOption = confirm("Would you like to include special characters in your password?");
        // console.log("Special characters YES");
        var numericOption = confirm("Would you like to include numeric characters in your password?");
        // console.log("Numeric characters YES");
        var lowerCaseOption = confirm("Would you like to include lower case characters in your password?");
        // console.log("Lower case characters YES");
        var upperCaseOption = confirm("Would you like to include upper case characters in your password?");
        // console.log("Upper case characters YES");
    };
//If user doesn't select any of the options
//If user selects all of the options
//If user selects only three options
//If user selects only two options
//If user selects only one option
if (!specialOption && !numericOption && !lowerCaseOption && !upperCaseOption) {
    alert("Please select a criteria");
} else if (specialOption && numericOption && lowerCaseOption && upperCaseOption) {
    options = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
    console.log(options);
} else if (specialOption && numericOption && lowerCaseOption) {
    options = options = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
    console.log(options);
} else if (specialOption && numericOption && upperCaseOption) {
    options = specialCharacters.concat(numericCharacters, upperCasedCharacters);
    console.log(options);
} else if (specialOption && lowerCaseOption && upperCaseOption) {
    options = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
    console.log(options);
} else if (numericOption && lowerCaseOption & upperCaseOption) {
    options = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
    console.log(options);
} else if (specialOption && numericOption) {
    options = specialCharacters.concat(numericCharacters);
    console.log(options);
} else if (specialOption && lowerCaseOption) {
    options = specialCharacters.concat(lowerCasedCharacters);
} else if (specialOption && upperCaseOption) {
    options = specialCharacters.concat(upperCasedCharacters);
} else if (numericOption && lowerCaseOption) {
    options = numericCharacters.concat(lowerCasedCharacters);
} else if (numericOption && upperCaseOption) {
    options = numericCharacters.concat(upperCasedCharacters);
} else if (lowerCaseOption && upperCaseOption) {
    options = lowerCasedCharacters.concat(upperCasedCharacters);
} else if (specialOption) {
    options = specialCharacters;
} else if (numericOption) {
    options = numericCharacters;
} else if (lowerCaseOption) {
    options = lowerCasedCharacters;
} else if (upperCaseOption) {
    options = upperCasedCharacters;
};
getRandom();
};

//Added a function to retrieve a random element from an array
function getRandom(arr) {
    var storePassword = [];

    for (var i = 0; i < passwordLength; i++) {
        // var randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        // var randomNumeric = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
        // var randomLowerCased = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
        // var randomUpperCased = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
        var allOptions = options[Math.floor(Math.random() * options.length)];
        storePassword.push(allOptions);
    };
    var generatedPassword = storePassword.join("");
    console.log("The password is " + storePassword);

    return generatedPassword;
};

//Added a function to generate password based on user's input
function generatedPassword() {
    getPasswordOptions();
    return getRandom();
};

//Setting up a button
var generateBtn = document.querySelector('#generate');

function writePassword() {
    var password = generatedPassword();
    var passwordText = document.querySelector('#password');
    
    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);