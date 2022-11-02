console.log('Hello from functions.js!');

/* 
    JavaScript Functions
*/

// Regularly Named Functions
// function funcName(){code to execute when called}

function addNums(){
    let num1 =10;
    let num2 = 20;
    return num1 + num2
};

// Execute a function: funcName();
console.log(addNums);
console.log(addNums());

// Regularly Named Functions with parameters
// function funcName(param1, param2, etc...){code to execute}
function addNums2(num1, num2){
    return num1 + num2
};

console.log(addNums2);
console.log(addNums2(15, 30));



// Take exercise 1 from last night and put it in a Function
function firstNonConsecutive(anArr){
    for (let x=0; x < anArr.length - 1; x++){
        if (anArr[x+1] - anArr[x] !== 1){
            return x + 1
        }
    }
    return -1 // if all nums are consecutive, return -1
}

console.log(firstNonConsecutive([1,2,3,4,6,6,7]));


// Default Parameters
function addNums3(num1, num2=100){
    return num1 + num2
};

console.log(addNums3(20));
console.log(addNums3(20, 30));


// Function Expressions
// var (let, const) nameOfVariable = function(){code to execute when called}
var addSumNums = function(){
    let num1 = 100
    let num2 = 200
    return num1 + num2
};

console.log(addSumNums);
console.log(addSumNums());

let addMoreNums = function(num1, num2){
    return num1 + num2
};

console.log(addMoreNums);
console.log(addMoreNums(10, 20));

const anotherFunc = function someCoolFuncName(a, b){
    return b - a
};

console.log(anotherFunc);
console.log(anotherFunc(10, 30));

// Arrow Functions
// var (let, const) varName = () => {code to execute}

var myFirstArrowFunc = () => {};
console.log(myFirstArrowFunc);
console.log(typeof myFirstArrowFunc);

// Arrow Function with parameters
// Remove the word 'function and replace with '=>' between params and {code}
let addNumsArrow = (num1, num2) => {
    return num1 + num2
};

console.log(addNumsArrow(5, 10));


// If {code to execute} is one line with only a return, you can remove {} and 'return'
let addNumsArrow2 = (num1, num2) => num1 + num2;

console.log(addNumsArrow2(5, 10));

// If one and only one parameter, parenthese around the param is not necessary
var addTen = num => num + 10;

console.log(addTen(23));


console.log('Exercise 2 as Arrow Function');

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 

let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 

let sumPositives = arr => {
    let totalPos = 0;
    for (let num of arr){
        if (num > 0){
            totalPos += num;
        };
    };
};

console.log(sumPositives(numbers1));
console.log(sumPositives(numbers2));


// Write a function to find the max number in an array
// 0 < length of the array < 100
// Ex 1: [3, 7, 2, 8, 10, 4, 11] Output: 11
// Ex 2: [33, 88, 55, 22, 11, 44] Output: 88
// Ex 3: [10] Output: 10



function maxNum(arr){
    let currentMax = arr[0];
    for (let num of arr){
        if (num > currentMax){
            currentMax = num
        };
    };
    return currentMax
};

console.log(maxNum([3, 7, 2, 8, 10, 4, 11]));
console.log(maxNum([33, 88, 55, 22, 11, 44]));
console.log(maxNum([10]));


let arrowMax = arr => {
    let currentMax = arr[0];
    for (let num of arr){
        if (num > currentMax){
            currentMax = num
        };
    };
    return currentMax;
};

console.log(arrowMax([3, 7, 2, 8, 10, 4, 11]));
console.log(arrowMax([33, 88, 55, 22, 11, 44]));
console.log(arrowMax([10]));