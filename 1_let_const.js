// 1
var num = 42;
num = 'str';
console.log(num); // 'str'


// 2
if (true) {
    var a = 42;
};
console.log(a); // 42


// 3
if (true) {
   let b = 42;
};
// console.log(b); // undefined


// 4
let c = 24;

if (true) {
    let c = 42;
};
console.log(c); // 24


// Hoisting 1
console.log(d); // undefined
var d = 10;


// Hoisting 2
e = 20
console.log(e); // 20
var e = 10;


// Hoisting 3
// f = 20 // error
// console.log(f); // undefined
let f = 10;


// Hoisting 4
function hoisted() {
    age = 24
}

let age;
hoisted();
console.log(age); // 24


// Let
let test = [1, 2, 3];
console.log(test);

test = '123';
console.log(test); // ok


// Const 1
const COLOR = '#fff';
// COLOR = 'black' // error


// Const 2 (array + obj)
const array = [1, 2, 3, 5, 8];
console.log(array);

array.push(13);
console.log(array);

// array = [] // error
