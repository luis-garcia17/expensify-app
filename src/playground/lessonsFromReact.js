// The keyword "this" binds to the child scope in regular functions. (The object or function above it).
// The keyword "this" binds to the parent scope in arrow functions. (The object or function above the one above it).

/*Remember that a method like printPlacesLived() inside an object is an ES6 feature that is equal to
   printPlacesLived: function () {

   } 
   
   Thus the value of "this" is bound to the child scope because it is a regular function */

const user = {
    name: `Luis`,
    cities: [`Reynosa`,`Monterrey`,`Paris`],
    printPlacesLived() {
       return this.cities.map( city => console.log(`${this.name} has lived in ${city}`));
    }
}
 
user.printPlacesLived();

//This block of code prints the arrow function 3 times.

const user = {
    name: `Luis`,
    cities: [`Reynosa`,`Monterrey`,`Paris`],
    printPlacesLived() {
       return this.cities.map( city => `${this.name} has lived in ${city}`);
    }
}
 
console.log(user.printPlacesLived());

//This block of code prints the array of messages.

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map( number => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());

//Just another example.
//---------------------------------------------------------------------------------------------------------

//Old templateTwo.

const user = {
    name: `Luis Alberto`,
    age: 30,
    location: `Reynosa, Tamaulipas`
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    } // If there is no "else" declared the "if" returns undefined and if an expression returns undefined, it doesn't show up in the browser.
} //Null and booleans (both true and false) don't show up in the browser either.

const templateTwo = ( 
<div>
<h1>{user.name ? user.name : `Anonymous`}</h1> 
{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
{getLocation(user.location)}
</div>
);



//Another syntax I tried for this component

class AddOption extends React.Component {
    handleAppOption(e) {
        e.preventDefault();
        const option = document.querySelector(`#something`);
        const val = option.value;
        if(val){
            alert(`Option added`);
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAppOption} action="">
                <input type="text" id="something" name="option" /> <button>Add option</button>
            </form>
        );
    }
}

const obj = {
    name: `Jan`,
    getName() {
        return this.name
    }
}

//keyword this binding.

const getName = obj.getName.bind(obj); //all of the this obj properties are now passed down to getName
const getName = obj.getName.bind({name: `Luis García`}); //this.name is now Luis García
console.log(getName());