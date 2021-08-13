const isLuhnValid = function luhn(array) {
    return function (number) {
        let len = number ? number.length : 0,
            bit = 1,
            sum = 0;

        while (len--) {
            sum += !(bit ^= 1) ? parseInt(number[len], 10) : array[number[len]];
        }

        return sum % 10 === 0 && sum > 0;
    };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);
console.log(isLuhnValid("4112344112344113".split(""))); // true
console.log(isLuhnValid("4112344112344114".split(""))); // false


//
// function checkLuhn() {
// }
// var number = 176248;
// var numbersArray = number.toString().split("");
// console.log(numbersArray);
// var total = 0;
// numbersArray.forEach(function(number, index) {
//     if (index % 2 !== 0) {
//         if ((parseFloat(number) * 2) < 10) {
//             total += parseFLoat(number);
//         } else {
//             var numberArray = (number * 2).toString().split("");
//             console.log(numberArray);
//             var numberToAddToTotal = parseFloat(numberArray[0]) + parseFloat(numberArray[1]);
//             total += numberToAddToTotal;
//         }
//     } else {
//         total += parseFloat(number);
//     }
// });
// console.log(total)

function processNumber(number) {
    var number = 176248;
    var numbersArray = number.toString().split("");
    // console.log(numbersArray);
    var total = 0;
    numbersArray.forEach(function(number, index) {
        if (index % 2 !== 0) {
            if ((parseFloat(number) * 2) < 10) {
                total += parseFLoat(number) * 2;
            } else {
                var numberArray = (number * 2).toString().split("");
                // console.log(numberArray);
                var numberToAddToTotal = parseFloat(numberArray[0]) + parseFloat(numberArray[1]);
                total += numberToAddToTotal;
            }
        } else {
            total += parseFloat(number);
        }
    });
    return total;
}