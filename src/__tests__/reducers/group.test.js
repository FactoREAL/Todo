import groups from '../../data/reducers/groups';
import {groupActionType} from "../../data/constants";

const state = [];

describe('reducers/groups', () => {
    it('добавление группы', function () {
        expect(groups(state, {type: groupActionType.ADD_GROUP, id: 1, title: 'new group'})).toEqual([{id: 1, title: 'new group'}]);
    });
});
