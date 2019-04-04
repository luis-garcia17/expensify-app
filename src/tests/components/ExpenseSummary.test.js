import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render component with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {0} expensesTotal = {0}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render component with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {100}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render component with two or more expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {2} expensesTotal = {10000}/>);
    expect(wrapper).toMatchSnapshot();
});