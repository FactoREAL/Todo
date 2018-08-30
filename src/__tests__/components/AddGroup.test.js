import React from 'react';
import AddGroup from '../../components/AddGroup';
import {shallow} from 'enzyme';

const addGroup = jest.fn();
const incId= jest.fn();

describe('<AddGroup />', () => {
    it('рендер компонента', function () {
        const wrapper = shallow(<AddGroup nextGroupId={1} onAddGroup={addGroup} onIncGroupId={incId} />);
        expect(wrapper.find('input').length).toBe(1);
        expect(wrapper.find('button').text()).toBe('Добавить');
    });
    it('добавление новой группы', function () {
        const wrapper = shallow(<AddGroup nextGroupId={1} onAddGroup={addGroup} onIncGroupId={incId} />);
        expect(wrapper.setState({value: 'new group'}).find('input').prop('value')).toBe('new group');
        wrapper.find('button').simulate('click');
        expect(wrapper.state().value).toBe('');
    });
});