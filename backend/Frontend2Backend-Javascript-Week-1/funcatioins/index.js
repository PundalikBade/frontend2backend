// funcation 

function sayHello() {
    console.log('Hey Piyush')
}

// parameters

function add(a, b) {
    return a + b;

}

let result = add(5, 6);

// console.log(result)


// anonymous function

const a = function(a, b) {
    return a + b;

};
// console.log(a(5, 6));


// Unlimited Arguments accept

function addNumber() {
    let ans = 0;
    for (let i = 0; i < arguments.length; i++) {
        ans = ans + arguments[i];
    }
    return ans;
}
let ans = addNumber(5, 8, 6);
// console.log(ans);


// Arrow Function


const Arrow = () => {
    console.log("hii")
}

Arrow();

const Greet = () => {
    console.log("Greet")
}

Greet();


// ✅ Immediately Invoked Function Expression (IIFE)
// A function that runs immediately after it's defined.

(function() {
    console.log("This runs immediately!");
})();

// Or using arrow function
(() => {
    console.log("Arrow IIFE runs immediately too!");
})();



// ✅ Function as a Callback
// Functions can be passed as arguments to other functions.
function greetUser(name, callback) {
    console.log("Hello " + name); // Step 1: Prints "Hello Pundalik"
    callback(); // Step 2: Runs the function you passed (sayBye)
}

function sayBye() {
    console.log("Goodbye!"); // What happens when sayBye is called
}

greetUser("Pundalik", sayBye); // Calling greetUser with "Pundalik" and sayBye as the callback