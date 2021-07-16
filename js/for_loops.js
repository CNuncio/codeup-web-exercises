//2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


// function showMultiplicationTable(number) {
//     for (var count = 1; count <= 10; count++) {
//         var result = number * count;
//         console.log(number + ' * ' + count + ' = ' + result);
//     }
// }
// showMultiplicationTable(4)

//3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

//     for ( count = 0; count < 10, count++){
// var randomNumber = Math.floor(Math.random() * 181 ) * 20;
// if (randomNum 5 2 === 0) {
// console.log(randomNum + " is even")
// } else {
//     console.log(randomNum + "is odd")
//             }
//         }



//4. Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// function numberPyramid(num) {
//     for(var count = 1; count <= num; count++) {
//         var stringToDisplay = "";
//     for(var duration = 0; duration < count; duration++) {
//  stringToDisplay += count.toString(); }
//     console.log(stringToDisplay);
// }
//     } numberPyramid(9);

// or


// for (count = 1, count < 10, count++ )
//     var number = count
// var count = 0
// var outputString = ''
// while (count < number) {
//         outputString = outputString + number.toString()
//     count = count + 1
// }
// console.log(outputString)

// or

// for (var outer = 1; outer < 10, outer++){
//     var output = ''
//     for(var inner = 1; inner <= outer; inner++){
//         outer += outer
//     }
//     console.log(output)
// }

// or

// var crazyOne = 1
// for (count = 1; count < 10; count++) {
//     console.log(count + crazyOne)
//     crazyOne = crazyOne.toString() + 1
// }

// 5. Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// ex from lecture:
// var count = 100;
// while (count >=0){
//     console.log(count);
//     count = count -1;
// }

for (count = 100; count >=5; count - 5){
    console.log(count);
}

