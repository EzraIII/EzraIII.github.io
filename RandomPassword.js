"use strict";

var password = "";
var passwordLength, arrayOfCharacters, spotForUL, spotForLL, spotForNu, spotForSy, theArrayToUse;
var character = "Error";
var initialized = false;
var minLength = 15;
var maxLength = 15;
const arrayOfLowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arrayOfUppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const arrayOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const arrayOfSymbols = ["@", "%", "+", "/", "!", "#", "$", "^", "?", ",", "^", "?", ",", "(", ")", "{", "}", "[", "]", "~", "-", "_", "."];

function GenerateRandomPassword() {
/*    if(initialized == false) {
        const minLengthOfPassword = document.getElementById("minLengthOfPassword");
        const maxLengthOfPassword = document.getElementById("maxLengthOfPassword");
        const randomPasswordTextField = document.getElementById("RandomPassword");
        const checkboxRUL = document.getElementById("RUL");
        const checkboxNUL = document.getElementById("NUL");
        const checkboxRLL = document.getElementById("RLL");
        const checkboxNLL = document.getElementById("NLL");
        const checkboxRN = document.getElementById("RN");
        const checkboxNN = document.getElementById("NN");
        const checkboxRS = document.getElementById("RS");
        const checkboxNS = document.getElementById("NS");
        initialized = true;
    }*/
    spotForLL = undefined;
    spotForUL = undefined;
    spotForNu = undefined;
    spotForSy = undefined;
    if(document.getElementById("minLengthOfPassword").value > 0) minLength = Math.ceil(document.getElementById("minLengthOfPassword").value);
    if(document.getElementById("maxLengthOfPassword").value > 0) maxLength = Math.ceil(document.getElementById("maxLengthOfPassword").value);
    arrayOfCharacters = [];
    if(!document.getElementById("NUL").checked) addUppercaseLetters();
    if(!document.getElementById("NLL").checked) addLowercaseLetters();
    if(!document.getElementById("NN").checked) addNumbers();
    if(!document.getElementById("NS").checked) addSymbols();
    password = "";
    passwordLength = Math.floor(Math.random()*(maxLength-minLength+1)+minLength);
    var charactersUnclaimed = passwordLength;
    if(document.getElementById("RUL").checked) {
        spotForUL = Math.floor(Math.random()*charactersUnclaimed);
        charactersUnclaimed--;
    }
    if(document.getElementById("RLL").checked) {
        spotForLL = Math.floor(Math.random()*charactersUnclaimed);
        if(spotForLL >= spotForUL) spotForLL++;
        charactersUnclaimed--;
    }
    if(document.getElementById("RN").checked) {
        spotForNu = Math.floor(Math.random()*charactersUnclaimed);
        if(spotForNu >= spotForUL || spotForNu >= spotForLL) spotForNu++;
        if(spotForNu >= spotForUL && spotForNu >= spotForLL) spotForNu++;
        charactersUnclaimed--;
    }
    if(document.getElementById("RS").checked) {
        spotForSy = Math.floor(Math.random()*charactersUnclaimed);
        if(spotForSy >= spotForUL || spotForSy >= spotForLL || spotForSy >= spotForNu) spotForSy++;
        if(spotForSy >= spotForUL && (spotForSy >= spotForLL || spotForSy >= spotForNu) || (spotForSy >= spotForLL && spotForSy >= spotForNu)) spotForSy++;
        if(spotForSy >= spotForUL && spotForSy >= spotForLL && spotForSy >= spotForNu) spotForSy++;
    }
    for (var i = 0; i < passwordLength; i++) {
        theArrayToUse = arrayOfCharacters;
        if(i===spotForUL){theArrayToUse = arrayOfUppercaseLetters;}
        else if(i===spotForLL){theArrayToUse = arrayOfLowercaseLetters;}
        else if(i===spotForNu){theArrayToUse = arrayOfNumbers;}
        else if(i===spotForSy){theArrayToUse = arrayOfSymbols;}
        character = theArrayToUse[Math.floor(Math.random()*theArrayToUse.length)];
        password += character;
    }
    document.getElementById("RandomPassword").value = password;
    console.log(passwordLength);
    console.log(spotForUL + " " + spotForLL + " " + spotForNu + " " + spotForSy)
}

function addLowercaseLetters(){
    for(var i = 0; i < arrayOfLowercaseLetters.length; i++){
        arrayOfCharacters.push(arrayOfLowercaseLetters[i]);
    }
}

function addUppercaseLetters(){
    for(var i = 0; i < arrayOfUppercaseLetters.length; i++){
        arrayOfCharacters.push(arrayOfUppercaseLetters[i]);
    }
}

function addNumbers(){
    for(var i = 0; i < arrayOfNumbers.length; i++){
        arrayOfCharacters.push(arrayOfNumbers[i]);
    }
}

function addSymbols(){
    for(var i = 0; i < arrayOfSymbols.length; i++){
        arrayOfCharacters.push(arrayOfSymbols[i]);
    }
}

/*function copyPassword(){
    var thePassword = document.getElementById("copyPasswordButton");
    thePassword.select();
    document.execCommand("copy");
}*/