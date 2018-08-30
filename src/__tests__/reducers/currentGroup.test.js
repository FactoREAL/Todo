import currentGroup from '../../reducers/currentGroup';
import {groupActionType} from "../../const/actionTypes";

describe('reducers/currentGroup', () => {
    it('выбор группы', function () {
        expect(currentGroup('', {type: groupActionType.SET_GROUP, title: 'test'})).toBe('test');
    });
});