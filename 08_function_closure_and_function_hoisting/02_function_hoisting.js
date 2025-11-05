//Function Hoisting
sayHello(); // Works, because it's hoisted

function sayHello() {
  console.log("Hello, world!");
}

//Function Expression
//Doesn't exhibit hoisting behariour

/*greet(); //This will reslut in an error
const greet = function() {
    console.log("Greetings!");
}; */