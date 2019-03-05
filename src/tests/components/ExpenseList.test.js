import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('Should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />); // We pass the expenses prop manually because the component relies on mapStateToProps for this in the original one.
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense list with no nexpenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />); // We pass the expenses prop manually because the component relies on mapStateToProps for this in the original one.
    expect(wrapper).toMatchSnapshot();
});

/* When testing we have to import the unconnected component for some reason, so in the original component file
   we have to make the unconnected component a named export */