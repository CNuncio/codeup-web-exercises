"use strict";

/* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */

// function analyzeColor(colorName)
//{
//
//     if (colorName === "blue") {
//         return ("blue is the color of angelite!");
//     } else if (colorName === "green") {
//         return ("green is the color of malachite!");
//     } else if (colorName === "yellow") {
//         return ("yellow is the color of citrine!");
//     } else if (colorName === "orange") {
//         return ("orange is the color of carnelian!");
//     } else if (colorName === "red") {
//         return ("red is the color of vanadinite!");
//     } else if (colorName === "violet") {
//         return ("violet is the color of amethyst!");
//     } else if (colorName === "indigo") {
//         return ("indigo is the color of charoite");
//     } else {
//         return ("I don't know a crystal of that color.");
//     }
// }
// console.log (analyzeColor())
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// console.log (analyzeColor(randomColor))


//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
//
// function analyzeColorSwitch(color) {
//     switch (color) {
//         case 'blue':
//             return 'blue is the color of angelite'
//         case 'green':
//             return 'green is the color of malachite'
//         case 'yellow':
//             return 'yellow is the color of citrine'
//         case 'orange':
//             return 'orange is the color of carnelian'
//         case 'red':
//             return 'red is the color of vanadinite'
//         case 'violet':
//             return 'violet is the color of amethyst'
//         case 'indigo':
//             return 'indigo is the color of charoite'
//         default:
//             return 'I don\'t know what crystal is ' + color
//     }
// }

// console.log(analyzeColorSwitch('blue'), 'blue is the color of angelite')
// console.log(analyzeColorSwitch('green'), 'green is the color of malachite')
// console.log(analyzeColorSwitch('yellow'), 'yellow is the color of citrine')
// console.log(analyzeColorSwitch('orange'), 'orange is the color of carnelian')
// console.log(analyzeColorSwitch('red'), 'red is the color of vanadinite')
// console.log(analyzeColorSwitch('violet'), 'violet is the color of amethyst')
// console.log(analyzeColorSwitch('indigo'), 'indigo is the color of charoite')
// console.log(analyzeColorSwitch('black'), 'I don\'t know what crystal is ' + color)

// OR:

// function analyzeColorSwitchWithBreak(color) {
//     var colorMsg;
//     switch (color) {
//         case 'blue':
//             colorMsg = 'blue is the color of angelite'
//             break;
//         case 'green':
//             colorMsg =  'green is the color of malachite'
//             break;
//         case 'yellow':
//             colorMsg =  'yellow is the color of citrine'
//             break;
//         case 'orange':
//             colorMsg =  'orange is the color of carnelian'
//             break;
//         case 'red':
//             colorMsg =  'red is the color of vanadinite'
//             break;
//         case 'violet':
//             colorMsg = 'violet is the color of amethyst'
//             break;
//         case 'indigo':
//             colorMsg =  'indigo is the color of charoite'
//             break;
//         default:
//             colorMsg =  'I don\'t know what crystal is ' + color
//     }
//     return colorMsg;
// }

// console.log(analyzeColorSwitchWithBreak('blue'), 'blue is the color of angelite')
// console.log(analyzeColorSwitchWithBreak('green'), 'green is the color of malachite')
// console.log(analyzeColorSwitchWithBreak('yellow'), 'yellow is the color of citrine')
// console.log(analyzeColorSwitchWithBreak('orange'), 'orange is the color of carnelian')
// console.log(analyzeColorSwitchWithBreak('red'), 'red is the color of vanadinite')
// console.log(analyzeColorSwitchWithBreak('violet'), 'violet is the color of amethyst')
// console.log(analyzeColorSwitchWithBreak('indigo'), 'indigo is the color of charoite')
// console.log(analyzeColorSwitchWithBreak('black'), 'I don\'t know what crystal is ' + color)

// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//

// var userColor = prompt('Please enter a color!');
//
// alert(analyzeColor(userColor));

// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */

function calculateTotal(luckyNumber, totalAmount) {
    var discountNumber;
    switch (luckyNumber) {
        case 0:
            discountNumber = 0;
            break;
        case 1:
            discountNumber = .1;
            break;
        case 2:
            discountNumber = .25;
            break;
        case 3:
            discountNumber = .5;
            break;
        case 4:
            discountNumber = .5;
            break;
        case 5:
            discountNumber = 1;
            break;

    }
return totalAmount - (discountNumber * totalAmount);

}

console.log(calculateTotal(0, 100), 100)
console.log(calculateTotal(4, 100), 50)
console.log(calculateTotal(5, 100), 0)
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
// //  * price before the discount was, and what their price after the discount is.
//  */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = parseFloat(prompt("What is the total bill in dollars?"));
var message = "your lucky number is: " + luckyNumber + ". " + "Your price before the discount is: " + totalBill + "." + "Your price after the discount is: " + calculateTotal(luckyNumber, totalBill)
alert(message);

// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */

var userWillEnterANumber = confirm('Click OK to enter a number.');

function isNumeric(input) {
    return !isNaN(input);
}

function createEVenOddMessage(number) {
    if (number % 2 === 0) {
        return 'Number is even'
    } else {
        return 'Number is odd'
    }
    // or:
    return (number % 2 === 0) ? 'Number is even' : 'Number is odd';
}

function createNumberPlus100Message() {
    return number + ' plus 100 is ' + (number + 100)
}

function createNegativePositiveMessage(number) {
    return (number < 0) ? 'Number is negative' : 'Number is posotive';
}

if (userWillEnterANumber) {
    var userNumber = parseFloat(prompt("Please enter a number."))
    if (isNumeric(userNumber)){
alert(createEVenOddMessage(userNumber))
        alert(createNumberPlus100Message(userNumber))
        alert(createNegativePositiveMessage(userNumber))
    } else {

    }
    alert('Input not a number!');
}

