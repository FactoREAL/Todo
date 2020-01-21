import currentGroup from '../../data/reducers/currentGroup';
import {groupActionType} from "../../data/constants";

describe('reducers/currentGroup', () => {
    it('выбор группы', function () {
        expect(currentGroup('', {type: groupActionType.SET_GROUP, title: 'test'})).toBe('test');
    });
});
