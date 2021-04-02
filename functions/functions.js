// name(data) => data out
// f(x) = x * x  // sqr function
/*
Way one:
<keyword> <yourName>(<what i need to work>){
    // What I do
    return <something>// what i want to give back
}
*/



//Two ways to write a function in js
function sqr(x){
    return x * x // 5 * 5
}
console.log(sqr(5));

// Arrow function or 'fat arrow function' 
// other languages call it a lambda expression
let aSqr = (x) => {
    return x * x   // Explicit return
}


let bMult = (x, y) => x * y   // Implicit return
let cSqr = x => x * x     // Implicit return

function greet(){  // This needs no parameters to work
    console.log("Hello world!");
}
greet();

function betterGreet(fName){  // This is a one parameters function
    console.log("Hello " + fName);
}
betterGreet("Tiffany"); // Passes in one argument (multiple arguments are called parameters)

let createFullName = (fName, lName) => {
    return `${fName} ${lName}`
}
let fullName = createFullName("Tiffany", "Alcorn")
console.log(fullName);

// OR

// let createFullName = (fName, lName) => `${fName} ${lName}`  // returns a template string
// let fullName = createFullName("Tiffany", "Alcorn")
// console.log(fullName);


function add2(x, y) {
    let z = 5  // This line is not returned from the function
    return x + y
}
console.log(add2(3, 5));