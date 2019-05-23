"use strict";

var password = "";
var passwordLength, arrayOfCharacters;
var character = "Error";

function GenerateRandomPassword(minLength, maxLength) {
    arrayOfCharacters = [];
    addLowerCaseCharacters();
    password = "";
    passwordLength = Math.floor(Math.random()*(maxLength-minLength+1)+minLength);
    for (var i = passwordLength; i > 0; i--) {
        character = arrayOfCharacters[Math.floor(Math.random()*arrayOfCharacters.length)];
        password += character;
    }
    console.log(password);
    console.log(passwordLength);
}

function addLowerCaseCharacters() {
    arrayOfCharacters.push("a");
    arrayOfCharacters.push("b");
    arrayOfCharacters.push("c");
    arrayOfCharacters.push("d");
    arrayOfCharacters.push("e");
    arrayOfCharacters.push("f");
    arrayOfCharacters.push("g");
    arrayOfCharacters.push("h");
    arrayOfCharacters.push("i");
    arrayOfCharacters.push("j");
    arrayOfCharacters.push("k");
    arrayOfCharacters.push("l");
    arrayOfCharacters.push("m");
    arrayOfCharacters.push("n");
    arrayOfCharacters.push("o");
    arrayOfCharacters.push("p");
    arrayOfCharacters.push("q");
    arrayOfCharacters.push("r");
    arrayOfCharacters.push("s");
    arrayOfCharacters.push("t");
    arrayOfCharacters.push("u");
    arrayOfCharacters.push("v");
    arrayOfCharacters.push("w");
    arrayOfCharacters.push("x");
    arrayOfCharacters.push("y");
    arrayOfCharacters.push("z");
}