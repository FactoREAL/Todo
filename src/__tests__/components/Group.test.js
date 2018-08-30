import React from 'react';
import Group from '../../components/Group';
import { shallow } from 'enzyme';

const group = {id: 0, title: 'test'};
const currentGroup = 'test';
const onSetGroup = jest.fn();

describe('<Group />', () => {
    it('рендер компонента', function () {
        const wrapper = shallow(<Group group={group} currentGroup={currentGroup} setGroup={onSetGroup} />);
        expect(wrapper.hasClass('active')).toBeTruthy();
        wrapper.setProps({currentGroup: 'test 2'});
        expect(wrapper.hasClass('active')).toBeFalsy();
    });
});