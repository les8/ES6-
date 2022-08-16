// Про обратные кавычки
const number = 45;
const string = `${number} сорок пять`;
console.log(string);


// Методы строк
string.startsWith('45'); // +
string.endsWith('45'); // -
string.includes('5'); // +
string.repeat(2); // '45 сорок пять45 сорок пять'

string.trim(); // удаление пробелов по бокам
string.trimStart();
string.trimEnd();
string.padStart(16, '123'); // '12345 сорок пять'
string.padEnd(10, '123'); // '45 сорок пять123'
