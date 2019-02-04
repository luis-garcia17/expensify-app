import {createStore, combineReducers} from 'redux'; 
import uuid from 'uuid'; 

/* Add expense */

const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

/* Remove expense */

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id    
});

/* Edit expense */

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

/* Set text filter */

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

/* Expenses reducer */

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }         
            });
        default:
            return state;
    }
}; 

/* Filters reducer */

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, ...action};
        default:
            return state;
    }
};

/* Store creation */

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        })
    );

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());



const demoState = {
    expenses: [{
        id: 'sdfsdfsdfs',
        description: 'January rent',
        note: 'This is the last payment for this apartment',
        amount: 54500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
