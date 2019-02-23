import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123xyz', ({amount: 500000, note: 'Rent went up by 500'}));
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123xyz',
        updates: {amount: 500000, note: 'Rent went up by 500'}
    });
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});

/* We use toEqual because toBe compares using "===" and {} === {} or [] === [] return false. 
   If we want to compare objects or arrays we're going to use toEqual  */