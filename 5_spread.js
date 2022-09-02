// Spread
const array = [1, 2, 3, 5, 8, 13];
console.log(array); // => массив 
console.log(...array); // => набор чисел

// Полезное применение:
console.log(Math.max(array)); // => NaN
console.log(Math.max(...array)); // => 13

const fib = [1, ...array];
console.log(fib);
