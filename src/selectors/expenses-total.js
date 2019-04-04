export default expenses => {
    let initialValue = 0;
    return expenses.map(expense => expense.amount).reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
};

/* We used .map in here to turn an array of objects into an array of numbers, I tried other things and they didn-t work so I suppose
this is the best method to do that */