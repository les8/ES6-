// Rest (собирает набор данных, например чисел в массив)
function average(arr) {
    return arr.reduce((acc, i) => acc += i, 0) / arr.length;
};
console.log(average([10, 20, 30, 40])); // тут ок => 25
// console.log(average(10, 20, 30, 40)); // а если набор чичел => error


function average2(...args) {
    console.log(args);
    return args.reduce((acc, i) => acc += i, 0) / args.length;
};

console.log(average2(10, 20, 30, 40)); // тут ок => 25
// console.log(average2([10, 20, 30, 40]))  // а тут => NaN
