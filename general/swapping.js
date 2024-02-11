let firstNumber = 10;
let secondNumber = 20;
console.log("vlaues before swapping");
console.log("first value ",firstNumber);
console.log("second value ",secondNumber);
//1 way
// let t = firstNumber;
// firstNumber = secondNumber;
// secondNumber = t;

// 2 way  -  destructuring

 [secondNumber,firstNumber] = [firstNumber, secondNumber];
console.log("vlaues after swapping");
console.log("first value ",firstNumber);
console.log("second value ",secondNumber)