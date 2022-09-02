// Destructuring
const array = [1, 2, 3, 5, 8, 13];
const [a, b = 42, ...c] = array;
console.log(a, b, c);

// Object
const address = {
    country: 'russia',
    city: 'kirov',
    street: undefined,
    concat: function() {
        return `${this.country} ${this.city} ${this.street}`;
    },
};

const {city, country, street = 'lepse', concat: renameFunctionIfYouNeed} = address;
// console.log(city);
// console.log(country);
// console.log(street);

console.log(renameFunctionIfYouNeed.call(address));
console.log(street);


const newAddress = {...address, city: 'anadyr', street: 'otke', building: 4};
console.log(newAddress);
