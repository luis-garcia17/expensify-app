import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'


test('Should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(450);
});

test('Should correctly add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(14950);
});

/* We used an approach here called test driven development, which consists of testing first before creating a component,
this can be used when you have functions like selectors, but not with components because it would be impossible to shallow
render without having the component first */