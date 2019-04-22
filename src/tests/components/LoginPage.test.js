import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('Should render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
    const onClickSpy = jest.fn(); //Andrew used startLogin for the variable name
    const wrapper = shallow(<LoginPage startLogin={onClickSpy} />);
    wrapper.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
});