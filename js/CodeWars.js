//from codewars on JS:

function multiply(a, b){
    a * b
}
//wont work, fix syntax

function multiply(a, b){
   return  a * b
}
//add return keyword


// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
//     The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.


// decodeMorseCode = function(morseCode){
//     //your code here
//     decodedOutput = " ";
//
//     for (var i = 0; i < morseCode.split(" ").length; i++) {
//         if // {
//             decodedOutPut += " ";
//         } else {
//            //
//         }
//
//     }
//     return decodedOutPut;
// }

//unifnished

//JS To show day/time as DOW
// //in progress

var today = newDay();
var day = today.getDay()
var DOWList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today's date is " +  DOWList[day] + ".")
// Get today's date and time
var now = new Date().getTime();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function todaysDate() {
    console.log("Today's date is " + DOWList[day] + "." + "The time is " + "time" + ".")
}

