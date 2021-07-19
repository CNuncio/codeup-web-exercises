(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    // /**
    //  * TODO:
    //  * Read each console log below, and write some javascript code to perform
    //  * the step that it describes
    //  */

    // The following array methods change the original array value!
    // someArray.shift()   = removes first element
    // someArray.unshift() = adds new first element
    // someArray.pop()     = removes last element
    // someArray.push()    = adds new last element
    //

    console.log(planets.unshift("The Sun"))
    // console.log('Adding "The Sun" to the beginning of the planets array.');


    console.log(planets.push("Pluto"))
    // console.log('Adding "Pluto" to the end of the planets array.');


    console.log(planets.shift("The Sun"))
    // console.log('Removing "The Sun" from the beginning of the planets array.');


    console.log(planets.pop("Pluto"))
    // console.log('Removing "Pluto" from the end of the planets array.');


    // console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexof('Earth'))

    // console.log("Reversing the order of the planets array.");
    console.log(planets.reverse);

    // console.log("Sorting the planets array.");
    console.log(planets.sort);
})();