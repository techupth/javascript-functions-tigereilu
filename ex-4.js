// Start coding here
let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let devide = (a, b) => a / b;

let calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    devide: devide
};

let addResult = calculator.add(10,20);
console.log(addResult);

let devideResult = calculator.devide(3000,20);
console.log(devideResult);