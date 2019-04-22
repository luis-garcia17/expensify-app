import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';

test('Should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click', () => {
    const onClickSpy = jest.fn(); //Andrew used startLogout for the variable name
    const wrapper = shallow(<Header startLogout={onClickSpy} />);
    wrapper.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
});