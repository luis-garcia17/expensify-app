import {createStore, combineReducers} from 'redux'; 
import uuid from 'uuid'; 

/* Add expense */

const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt =0 
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

/* Expenses reducer */

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
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

store.dispatch(addExpense({description: 'Rent', amount: 100 }));



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