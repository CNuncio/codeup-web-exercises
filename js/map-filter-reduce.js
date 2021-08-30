const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//return only on=bj that have more than or equal to 3 languages
const result =  users.filter(function(input){
        return input.languages.length >= 3
    });
console.log(result)

// or : let result =  users.filter(input => input.languages.length >= 3);


//ex from developer.mozilla.org:
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
// const result = words.filter(word => word.length > 6);
//
// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


//return emails as strings

const stringEmails = users.map(function(input) {
    return input.email
});
//dont need .toString() bc .map already does that here
// or :
// const stringEmails = users.map(input => input.email);
console.log(stringEmails)
//

const totYrsOfExp = users.reduce((totYears, user, index, arr)) => {
    fi (index === arr.length - 1) {
        return (totYrs + user.totYrsOfExp)/arr.length ;
    }
    return
}

//paris:

let longestEmail = users.reduce((a,b) => {
    if (a.length < b.email.length) {
        a = b.email
    }
    return a
}, '')
console.log(longestEmail)
// or one-liner:
// let longestEmail = users.reduce(((a, b) => a.length < b.email.length ? a = b.email : a), '')


bonus:
    let uniqueUserLanguages = users.reduce(function(accumulator, user){
    let languages = user.languages;
    for (let i = 0; i < languages.length; i++){
        if (!accumulator.includes(languages[i])){
            accumulator.push(languages[i]);
        }
    }
    return accumulator.sort();
}, []);
console.log(uniqueUserLanguages);

