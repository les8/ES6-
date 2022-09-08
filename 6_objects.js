/*
    1.стрелочные функции
    2.методы
    3.Object.keys()
    4.динамические ключи [cityField]
    5.совпадение ключа и значения
*/

const cityField = 'city';
const job = 'Frontend';

const person = {
    age: 26,
    name: 'irina',
    job,
    [cityField]: 'SPB',
    'country-name': 'Russia',
    print: () => 'Person',
    toString() {
        return Object
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ');
    },
};

console.log(person.toString());
