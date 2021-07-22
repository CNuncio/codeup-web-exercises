
(function() {
    "use strict";

    // /**
    //  * TODO:
    //  * Create an object with firstName and lastName properties that are strings
    //  * with your first and last name. Store this object in a variable named
    //  * `person`.

    // var person =
    //     { firstName: "Christina",
    //    lastName: "Nuncio"
    //    }
// console.log(person.firstName)
//     console.log(person.lastName)
    // * Example:
    // *  > console.log(person.firstName) // "Rick"
    // *  > console.log(person.lastName) // "Sanchez"
    // */

    // /**
    //  * TODO:
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work
    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */

//     person.sayHello = function() {
//          return 'Hello from ' + person.firstName + ' ' + person.lastName + '!';
//     };
// //or this.firstName/ this.lastName
//     console.log(person.sayHello());

    // /** TODO:
    //  * HEB has an offer for the shoppers that buy products amounting to
    //  * more than $200. If a shopper spends more than $200, they get a 12%
    //  * discount. Write a JS program, using conditionals, that logs to the
    //  * browser, how much Ryan, Cameron and George need to pay. We know that
    //  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
    //  * display a line with the name of the person, the amount before the
    //  * discount, the discount, if any, and the amount after the discount.
    //  * Uncomment the lines below to create an array of objects where each object
    //  * represents one shopper. Use a foreach loop to iterate through the array,
    //  * and console.log the relevant messages for each person
    //  */

    // var shopper = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shopper.forEach(function (shopper) {
    //     if (shopper.amount > 200) {
    //         console.log("Congrats to: " + shopper.name + " ! You have spent over $200! Your current total is $" + shopper.amount + " . You will now get a 12% discount! Your new discounted total is: " + (shopper.amount - (shopper.amount * .12)) + " .")
    //     } else {
    //         console.log("Sorry " + shopper.name + " , you did not spend over $200. You only spent $" + shopper.amount)
    //     }
    // })

    //w/o forEach loop :
    //function calculateDiscount(amount, threshold, discountPercentage) {
    //if (amount <= threshold) {
    // return 0
// } else {
//     return (amount * discountPercentage))
    // console.log(calculateDiscount(180, discountThreshold, discountPercentage), 0)
    // console.log(calculateDiscount(250, discountThreshold, discountPercentage), 30)
    // console.log(calculateDiscount(3200, discountThreshold, discountPercentage), 38.4)


    //var cameronDiscountedAmount = calculatedDiscount(shoppers[0].amount, discountThreshold, discountPercentage)
    // var output1 = "Cameron is purchasing " + shoppers[0].amount ' of things. He will get " + cameronDiscountedAmeount + " off the purchase and pay " + (shoppers[0].amount - cameronDiscountedAmount) + ".";
// console.log(output1)
    // /** TODO:
    //  * Create an array of objects that represent books and store it in a
    //  * variable named `books`. Each object should have a title and an author
    //  * property. The author property should be an object with properties
    //  * `firstName` and `lastName`. Be creative and add at least 5 books to the
    //  * array

    var books = [
         {title: 'All Tomorrows', author: "C. M. Koseman"},
         {title: 'Wiccapedia', author: "Shawn Robbins"},
        {title: 'Night', author: "Elie Weisel"},
        {title: "A Separate Peace", author: "John Knowles"},
        {title: "Fahrenheit 451", author: "Ray Bradbury"}
     ];

    //  * Example:
    //  * > console.log(books[0].title) // "The Salmon of Doubt"
    //  * > console.log(books[0].author.firstName) // "Douglas"
    //  * > console.log(books[0].author.lastName) // "Adams"
    //  */
    //
    //  * TODO:
    //  * Loop through the books array and output the following information about
    //  * each book:
    //  * - the book number (use the index of the book in the array)
    //  * - the book title
    //  * - author's full name (first name + last name)
    //  *
    //  * Example Console Output:
    //  *
    //  *      Book # 1
    //  *      Title: The Salmon of Doubt
    //  *      Author: Douglas Adams
    //  *      ---
    //  *      Book # 2
    //  *      Title: Walkaway
    //  *      Author: Cory Doctorow
    //  *      ---
    //  *      Book # 3
    //  *      Title: A Brief History of Time
    //  *      Author: Stephen Hawking
    //  *      ---
    //  *      ...
    //  */
    //
    // /**
    //  * Bonus:
    //  * - Create a function named `createBook` that accepts a title and author
    //  *   name and returns a book object with the properties described
    //  *   previously. Refactor your code that creates the books array to instead
    //  *   use your function.
    //  * - Create a function named `showBookInfo` that accepts a book object and
    //  *   outputs the information described above. Refactor your loop to use your
    //  *   `showBookInfo` function.
    //  */

})();
