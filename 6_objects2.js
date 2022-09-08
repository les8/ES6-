// Methods
const first = { a: 1 };
const second = { b: 2 };

console.log(Object.is(10, 20));  // сравнить на эквивалентность false

const obj = Object.assign({}, first, second);
console.log(obj); // объединение объектов ( в новый в данном случае )

console.log(Object.entries(obj)); // двумерный массив
console.log(Object.keys(obj));
console.log(Object.values(obj));
