import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
        };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
        };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add('3', 'days')
        };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
        };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
        };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

/* We use moment() because currently our filters in the selectExpenses selector are set to 'days' and if we use those we are going
   to get into some weird situation where the filters won't work if we provide test values like 0, 1000, -1000 because of the isSameOrBefore
   and the isSameOrAfter methods */