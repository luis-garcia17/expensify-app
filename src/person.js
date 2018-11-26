export const isAdult =  (age) => age >= 18 ? 'Is adult' : 'Is baby'; //age >=18 && 'Is adult' (Alternative syntax)
export const canDrink = (age) => age >= 21 ? 'Can drink' : 'Is a faggot';
const isSenior = (age) => age >= 65 ? 'Is senior' : 'Es chavo pero se le extiende si llena un formato';

export default isSenior;
// export default (age) => age >= 65 ? 'Is senior' : 'Es chavo pero se le extiende hasta los 67 si llena un formato';

/*Syntax for booleans*/
// export const isAdult =  (age) => age >= 18;
// export const canDrink = (age) => age >= 21; 
// const isSenior(age) => age >= 65;
// export default isSenior;

//export default (age) => age >= 65;