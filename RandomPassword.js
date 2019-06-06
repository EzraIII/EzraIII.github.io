"use strict";

var password = "";
var passwordLength, arrayOfCharacters, spotForUL, spotForLL, spotForNu, spotForSy, theArrayToUse;
var character = "Error";
var minLength = 15;
var maxLength = 15;
const arrayOfLowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arrayOfUppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const arrayOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const arrayOfSymbols = ["+", "/", "!", "#", "$", "^", "?", ",", "^", "?", ",", "(", ")", "{", "}", "[", "]", "~", "-", "_", "."];

function GenerateRandomPassword() {
    spotForLL = undefined;
    spotForUL = undefined;
    spotForNu = undefined;
    spotForSy = undefined;
    if(textboxLengthOfPassword.value > 0) passwordLength = Math.ceil(textboxLengthOfPassword.value);
    arrayOfCharacters = [];
    if(checkboxRUL.checked) addUppercaseLetters();
    if(checkboxRLL.checked) addLowercaseLetters();
    if(checkboxRN.checked) addNumbers();
    if(checkboxRS.checked) addSymbols();
    password = "";
    var charactersUnclaimed = passwordLength;
    if(checkboxRUL.checked) {
        spotForUL = Math.floor(Math.random()*charactersUnclaimed);
        charactersUnclaimed--;
    }
    if(checkboxRLL.checked) {
        spotForLL = Math.floor(Math.random()*charactersUnclaimed);
        if(spotForLL >= spotForUL) spotForLL++;
        charactersUnclaimed--;
    }
    if(checkboxRN.checked) {
        spotForNu = Math.floor(Math.random()*charactersUnclaimed);
        if(spotForNu >= spotForUL || spotForNu >= spotForLL) spotForNu++;
        if(spotForNu >= spotForUL && spotForNu >= spotForLL) spotForNu++;
        charactersUnclaimed--;
    }
    if(checkboxRS.checked) {
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
    textboxRandomPassword.value = password;
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

function copyPasswordBasedOnDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        copyPasswordMobile();
    } else {
        copyPassword();
    }
}