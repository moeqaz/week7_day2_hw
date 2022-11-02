console.log('Hello from arrayMethods.js!');

/*
    Array Methods
*/

// Create an array with which we will work
let names = ['Jane', 'Mike', 'Anthony', 'Bruce', 'Katie', 'Matt'];

// Basic Looping
for (let i=0; i < names.length; i++){
    console.log(names[i])
};

console.log('=============')

// for...of loop
for (let name of names){
    console.log(name);
};

console.log('=============')


// Array.prototype.forEach()
names.forEach(element => console.log(element));

console.log('=============')

// Callback function 
function logInfo(element, idx, arr){
    console.log(element, idx, arr)
};

names.forEach(logInfo);

names.forEach(name => console.log(name.toUpperCase()));


console.log('=============')

// Array.prototype.map()
function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase();
    } else {
        return element.toLowerCase();
    };
};

let newNames = names.map(mapCallBack);
console.log(newNames);
console.log(names);

// As Arrow Function
let newerNames = names.map((e, i) => i%2 === 0 ? e.toUpperCase() : e.toLowerCase() );
console.log(newerNames);


// Array.prototype.filter()
let cities = ['Chicago', 'Baltimore', 'Towson', 'Silver Spring', 'Cockeysville'];
console.log(cities);

function startsWithC(cityName){
    return cityName[0].toUpperCase() === 'C';
};

let cNameCitiesMap = cities.map(startsWithC);
console.log(cNameCitiesMap);

let cNameCitiesFilter = cities.filter(startsWithC);
console.log(cNameCitiesFilter);

// As Arrow Function
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);


// Array.prototype.concat()

let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

console.log(arrA + arrB);
console.log(typeof (arrA + arrB));

let arrC = arrA.concat(arrB);
console.log(arrC);


// Array.prototype.includes()
let fruits = ['orange', 'apple', 'banana', 'pear', 'watermelon', 'banana'];

console.log(fruits.includes('orange'));
console.log(fruits.includes('mango'));
console.log('apple' in fruits);
console.log('2' in fruits);
console.log(fruits);


// Array.prototype.indexOf()
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('mango'));


// Array.prototype.join()
let myArrName = ['U', 's', 'a', 'm', 'a'];

console.log(myArrName.join());
console.log(myArrName.join(''));
console.log(myArrName.join('-'));


// Array.prototype.push() -- equivalent to the list.append in python
console.log(fruits.push('mango'));
console.log(fruits);

fruits.push('pineapple', 'strawberry', 'kiwi');
console.log(fruits);

let empty = [];
empty.push('Hello');
console.log(empty);


// Array.prototype.pop()
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);


// Array.prototype.reverse()
console.log(cities);
cities.reverse();
console.log(cities);
cities.reverse();
console.log(cities);


// Array.prototype.slice()
console.log('Array Slice:')
console.log(fruits);
console.log(fruits.slice());
console.log(fruits.slice(2));
console.log(fruits.slice(2, 6));
console.log(fruits.slice(0, -2));


// Array.prototype.splice()
console.log('Array Splice:');
console.log(fruits);
fruits.splice(2, 0, 'kiwi');
console.log(fruits);

let newArr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(newArr);
newArr.splice(3, 2, 10, 20, 30);
console.log(newArr);


// Array.prototype.sort()
let unsorted = [23, 1, 45, 10, -7, 13, 15, 2];
console.log('Sort:');
unsorted.sort();
console.log(unsorted);


let newUnsorted = [9, 70, 61, 5, 8, 21, -10, 15];

function compareFunc(a, b){
    console.log('A:', a, 'B:', b)
    if (a > b){
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
}

console.log(newUnsorted);
newUnsorted.sort(compareFunc);
console.log(newUnsorted);

// To sort by number value
let anotherUnsorted = [23, 32, 1, -1, 65, 8, 97];
console.log(anotherUnsorted);
anotherUnsorted.sort((a, b) => a-b);
console.log(anotherUnsorted);