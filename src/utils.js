console.log('utils.js is running');
export const square = (x) => x*x;
export const add = (a, b) => a + b;

// export {square, add};

export const isAdult =  (age) => age >= 18 ? 'Is adult' : 'Is baby'; //age >=18 && 'Is adult' (Alternative syntax)
export const canDrink = (age) => age >= 21 ? 'Can drink' : 'Is a faggot';