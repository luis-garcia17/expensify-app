/* Object destructuring */

/* const person = {
    name: 'Luis',
    age: 31,
    location: {
        city: 'Reynosa',
        temp: 0
    }
};

const {name: firstName = 'Anonymous', age} = person;
const {city, temp: temperature} = person.location;

console.log(`${firstName} is from ${city} and is ${age} year(s) old.`);

if (city && typeof temperature === 'number') {
    console.log(`It's ${temperature} in ${city}`);
};

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName); //Penguin or default = Self-published */

/* --------------------------------------------------- */
/* Array destructuring */

const address = ['Filosofos 217, Col. Tecnologico', 'Monterrey', 'Nuevo Leon', '64700'];
const [ , city, state, zipCode] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [beverage, , mediumPrice] = item;

console.log(`A Medium ${beverage} costs ${mediumPrice}.`);