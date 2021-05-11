"use strict";
function mailHasher(email) {
    // extract first 2 characters
    let firstTwoChar = email.slice(0, 2);
    // extract characters to be replaced with asterisks
    let charToAst = email.slice(2, email.indexOf("@"));
    // make the charToAst an array using the string.split() method
    let charArr = charToAst.split("");
    // initialize an empty array to use later
    let queueArr = [];
    // extract parts starting from @
    let lastParts = email.slice(email.indexOf("@"));
    // loop through charToAst to be able to replace each characters it with *
    for (let i = 0; i < charToAst.length; i++) {
        let asteChars = charToAst[i].replace(charToAst[i], "*");
        queueArr.push(asteChars);
    }
    return joinAll(firstTwoChar, ...queueArr, lastParts);
}
;
function joinAll(...emailParts) {
    return emailParts.reduce((acc, curr) => {
        return acc + curr;
    });
}
;
// test logic by passing an email address
console.log(mailHasher("tobigold@yanjoi.com"));
