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
            return {...state, sortBy: 'amount'}; //I did sortBy: action.sortBy and it worked on the app but the tests failed
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}; //I did sortBy: action.sortBy and it worked on the app but the tests failed
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default:
            return state;
    }
};