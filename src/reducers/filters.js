import moment from 'moment';

/* Filters reducer */

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, ...action}; //Andrew did this with text: action.text
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: action.sortBy}; //Andrew did this overriding the object by directly setting this one to sortBy: 'amount' in here
        case 'SORT_BY_DATE':
            return {...state, sortBy: action.sortBy}; //Andrew did this overriding the object by directly setting this one to sortBy: 'date' in here
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default:
            return state;
    }
};