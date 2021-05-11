function mailHasher(email:string):string {

    // extract first 2 characters
    let firstTwoChar:string = email.slice(0,2);

    // extract characters to be replaced with asterisks

    let charToAst:string = email.slice(2, email.indexOf("@"));

    // make the charToAst an array using the string.split() method

    let charArr:string[] = charToAst.split("");

    // initialize an empty array to use later

    let queueArr:string[] = [];

    // extract parts starting from @
    let lastParts:string = email.slice(email.indexOf("@"));

    // loop through charToAst to be able to replace each characters it with *

    for(let i = 0; i < charToAst.length; i++) {
        let asteChars = charToAst[i].replace(charToAst[i], "*");
        queueArr.push(asteChars);
    }
    return joinAll(firstTwoChar,...queueArr,lastParts);
};

function joinAll(...emailParts: string[]):string {
    return emailParts.reduce((acc:string,curr:string):string => {
        return acc + curr;
    });
};

// test logic by passing an email address
console.log(mailHasher("tobigold@yanjoi.com"));