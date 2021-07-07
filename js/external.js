// "use strict"
// // alert("Hi, I am a JavaScript alert!")
//
// // var userDecision = confirm("are you sure you don't want to buy stuff on sale?")
// // console.log(userDecision)
// //
// // if (userDecision === true){
// //     alert("Wise choice!")
// // } else {
// //     alert("On no, youre loss!")
// // }
//
// // prompt
//
// var currentSpeedInMph = 65
// var plannedSpeedInMph = prompt("How fast do you plan to go in mph?")
// console.log(plannedSpeedInMph)
//
// var distanceLeftInMiles = prompt("How many miles away are you from your destination?")
// var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles/currentSpeedInMph) * 60
// var timeToDestinationAtPlannedSpeedInMph = (distanceLeftInMiles/plannedSpeedInMph) * 60
// var timeGoing = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeedinMph
// console.log("If you drive at " + plannedSpeedInMph + " mph, you will  arrive " + timeGoing.tofixed(2) + " minutes earlier")

console.log("Hello from external JavaScript")
alert('Welcome to my Website!')
var favoriteColor = prompt("What's your favorite color?")
var favoriteColorToo = alert("Great," + favoriteColor + " is my favorite color too!")

var daysOfRentforLitMer = prompt("How many days did you rent The Little Mermaid?")
var daysOfRentforBroBear = prompt("How many days did you rent Brother Bear?")
var daysOfRentforHercules = prompt("How many days did you rent Hercules?")
var rentalPayDayDollars = prompt("What is the daily rental rate in dollars?")

var totalRentCostOfMovies = (daysOfRentforLitMer + daysOfRentforBroBear + daysOfRentforHercules) * rentalPayDayDollars
alert("$" + totalRentCostOfMovies)

var $PerHrGoogle = prompt("How much does Google pay per hour?")
var $PerHrAmazon = prompt("How much does Amazon pay per hour?")
var $PerHrFaceBook = prompt("How much does FaceBook pay per hour?")
var GoogleHours = prompt("How many hours this week at Google?")
var AmazonHours = prompt( "How many hours this week at Amazon?")
var FaceBookHours = prompt("How many hours this week at FaceBook?")
var totalPayPerWeek = GoogleHours * $PerHrGoogle + AmazonHours * $PerHrAmazon + FaceBookHours * $PerHrFaceBook
alert("Total payment is $" + totalPayPerWeek.toFixed(2

    var classIsNotFull = confirm("Confirm that the class is not full")
    var classScheduleCheck = confirm("Confirm that the schedules check")
    var studentEnrolled = classIsNotFull && classScheduleCheck
    alert("Student enrollment status:" + studentEnrolled)

var discountBreakPoint = 2
var numberOfItems = prompt("How many items were bought?")
var offerIsNotExpired = confirm("Confirm offer has not expired.")
var isPremiumNumber = confirm("Comsumer is a Premium Member?")
var productDiscountIsApplied = offerIsNotExpired && (isPremiumNumber || numberOfItems >= discountBreakPoint)
alert("Product discount applied:" + productDiscountIsApplied)






