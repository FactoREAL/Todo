import { combineReducers } from 'redux';
import groups from './groups';
import nextGroupId from './nextGroupId';
import currentGroup from './currentGroup';
import nextTaskId from './nextTaskId';
import tasks from './tasks';

const allReducers = combineReducers({
	currentGroup: currentGroup,
	groups: groups,
	tasks: tasks,
	nextGroupId: nextGroupId,
	nextTaskId: nextTaskId
});

export default allReducers;