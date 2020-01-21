
import {addGroup, addTask, incGroupId, setGroup, toggleTask} from "../../data/actions";
import {groupActionType, taskActionType} from "../../data/constants";

describe('group actions', () => {
    it('addGroup()', function () {
        expect(addGroup({id: 0, title: 'test'})).toEqual({id: 0, title: 'test', type: groupActionType.ADD_GROUP});
    });
    it('incGroupId()', function () {
        expect(incGroupId()).toEqual({type: groupActionType.INC_GROUP_ID});
    });
    it('setGroup()', function () {
        expect(setGroup('test')).toEqual({title: 'test', type: groupActionType.SET_GROUP});
    });
});

describe('task actions', () => {
    it('addTask()', function () {
        expect(addTask({id: 0, group: 'work', title: 'test'})).toEqual({id: 0, group: 'work', title: 'test', type: taskActionType.ADD_TASK});
    });
    it('toggleTask()', function () {
        expect(toggleTask(1)).toEqual({id: 1, type: taskActionType.TASK_TOGGLE});
    });
    // etc.
});
