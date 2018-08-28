import { taskActionType } from '../const/actionTypes';

const initState = [
	{id: 0, group: 'Работа', title: 'Создавать видимость работы', done: false, edit: false},
	{id: 1, group: 'Личное', title: 'Разобраться с React', done: true, edit: false},
	{id: 2, group: 'Личное', title: 'Разобраться с Redux', done: false, edit: false}
];

function task(state = {}, action) {
	switch(action.type) {
		case taskActionType.ADD_TASK:
			return {
				id: action.id,
				group: action.group,
				title: action.title,
				done: false,
				edit: false
			};
		case taskActionType.TASK_TOGGLE:
			if (state.id !== action.id) {
				return state;
            }
			return {
				...state,
				done: !state.done
			};
		default:
			return state;
	}
}

function tasks(state = initState, action) {
	let newTasks;
	switch(action.type) {
		case taskActionType.ADD_TASK:
			return [...state, task(null, action)];
		case taskActionType.TASK_TOGGLE:
			return state.map(s => task(s, action));
		case taskActionType.TASK_DELETE:
			return state.filter(t => t.id !== action.id);
		case taskActionType.TASK_EDIT:
			newTasks = state.slice();
			newTasks.map(t => {
				if (t.id === action.id) {
					t.edit = true;
                }
				return true;
			});
			return newTasks;
		case taskActionType.TASK_EDIT_SAVE:
			newTasks = state.slice();
			newTasks.map(t => {
				if (t.id === action.payload.id) {
					t.edit = false;
					t.title = action.payload.title;
				}
				return true;
			});
			return newTasks;
		case taskActionType.TASK_EDIT_CANCEL:
			newTasks = state.slice();
			newTasks.map(t => {
				if (t.id === action.payload) {
					t.edit = false;
                }
				return true;
			});
			return newTasks;
		default:
			return state;
	}
}

export default tasks;