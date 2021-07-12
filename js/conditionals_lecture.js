// alert('hello world')
//
// var flavor = prompt("Welcome to Codeup ice cream! What flavor do you want?")
// //
// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!")
// } else if (flavor === "vanilla"){
//     alert("One vanilla coming right up!")
// } else if (flavor === "strawberry"){
//     alert("One strawberry coming right up!")
// } else if (flavor === "mint chocolate chip")
//     alert("One mint chocolate chip coming right up!")

//evaluates to true with strict comparison operator so uses code block (inside the curly braces)
//
// else {
//     alert("We do not have that flavor. Sorry! :(")

// basic syntax called if-else

//switch syntax same thing

// switch(flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!")
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!")
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!")
//         break;
//     case("mint chocolate chip"):
//         alert("One mint chocolate chip coming right up!")
//         break;
//     default:
//         alert("We do not have that flavor. Sorry! :(")
// }

// function getIceCreamOrder(flavor)
//
// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!")
// } else if (flavor === "vanilla"){
//     alert("One vanilla coming right up!")
// } else if (flavor === "strawberry"){
//     alert("One strawberry coming right up!")
// } else if (flavor === "mint chocolate chip")
//     alert("One mint chocolate chip coming right up!")
// } else {
//     alert("Sorry. We do not have that flavor.")
// }

// function getIceCreamOrder(flavor){
//     if (flavor === "chocolate" || flavor === "strawberry" || flavor === "vanilla" || flavor === "mint chocolate chip"){
//         alert("One " + flavor + "coming right up!")
//     } else {
//         alert("We do not have that flavor. Sorry!")
//     }
// }
// getIceCreamOrder(chocolate)

// function replyToCustomer(){

// return prompt("Welcome to Codeup Ice Cream. What flavor do you want?")
// }
//     if (checkIfWeHaveTheFlavor(flavor)){
//         alert("One " + flavor + " coming right up!")
//     } else {
//         alert("We do not have that flavor. Sorry!")
//     }
// }
//
// replyToCustomer(getIceCreamOrder())

// var decision = confirm("Are you sure you want to close this page?")
//
// // if (decision === true){
// //     alert("OK, closing page... :/")
// // } else {
// //     alert("Yay! Keeping page open!! :D")
// // }
//
// //or
//
// alert((decision === true)? "Ok, closing page... :(" : "Yay! Keeping page open!! :D")


//new example:
//
// var number = prompt("Type in a number")
// var num = 7
//
// if(num %5 === 0){
//     alert("That number is divisible by 5.")
// } else {
//     alert('That number is not divisible by five.')
// }
//
// // as function: same output
//
// function divisbleByFive(num){
//     if(num % 5 === 0) {
//         alert("That number is  divisble by 5!")
//     }else {
//         alert("That number is not divisble by five.")
//     }
// }
//
// function divisibleByFive(num){
//     alert( (num % 5 === 0)? "That number is divisble by 5" : "That number is not divisble by 5")
// }

// function isDivisibleByFive(num){
//     if (num % 5 === 0){
//      return true
//     } else {
//         return false
//     }
// }
// same as :
//returns booleans:


// function isDivisibleByFive(num){
//     return num % 5 === 0
// }
//
// if (typeof email === undefined) {
//     alert("That's undefined.")
// } else {
//     alert("That's not undefined.")
// }

// to check if something i sundefined use typeof to catch more situations

//function:

// function isUndefined(input){
//     if (typeof input === "undefined"){
//         return true
//     } else {
//         return false
//     }
// }


//simplified:

//
// function isUndefnied(input){
//     return typeof input === "undefined"
// }

// returns true if purchase over 1000 and false if not over 1000

// function alertMVPCustomer(totalPurchase){
//     if (totalPurchase > 1000){
//         alert("We have an MVP customer!!!!!")
//     }
// }

// to return  boolean:

// function alertMVPCUstomer(totalPurchase){
//     if (totalPurchase > 1000){
//         return true
//     } else {
//         return false
//     }
// }

// simplified/rewritten:

function isMVPCustomer (totalPurchase) {
    return totalPurchase > 1000
}

var totalPurchase = 10000

if (isMVPCustomer(totalPurchase)){
    alert("We have an MVP customer!!!")
}

// dont do this: dont call global variable from inside function
// var isMVPCustomer = function(){
// return whatTheCustomerSpent > 100
// }

