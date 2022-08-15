function sum(a, b) {
    return a + b;
};

function cube(a) {
    return a**3;
};

const sumArrow = (a, b) => a + b;


// Context
const person = {
    age: 23,
    shit: () => console.log(this.age), // undefined
    shit2: function() {
        console.log(this.age); // 23
    },
    shit3: function() {
        global.setTimeout(function() {
            console.log(this.age); // undefined
        }, 500);
    },
    shit4: function() {
        global.setTimeout(() => {
            console.log(this.age); // 23
        }, 500);
    },
};

person.shit3();