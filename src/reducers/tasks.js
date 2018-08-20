const initState = [
	{id: 0, group: 'Работа', title: 'Создавать видимость работы', done: false, edit: false},
	{id: 1, group: 'Личное', title: 'Разобраться с React', done: true, edit: false},
	{id: 2, group: 'Личное', title: 'Разобраться с Redux', done: false, edit: false}
];

function task(state = {}, action) {
	switch(action.type) {
		case "ADD_TASK":
			return {
				id: action.id,
				group: action.group,
				title: action.title,
				done: false,
				edit: false
			};
		case "TASK_TOGGLE":
			if (state.id !== action.id) return state;
			return {
				...state,
				done: !state.done
			}
		default:
			return state;
	}
}

function tasks(state = initState, action) {
	let newTasks;
	switch(action.type) {
		case "ADD_TASK":
			return [...state, task(null, action)];
		case "TASK_TOGGLE":
			return state.map(s => task(s, action));
		case "TASK_DELETE":
			return state.filter(task => task.id !== action.payload);
		case "TASK_EDIT":
			newTasks = state.slice();
			newTasks.map(task => {
				if (task.id === action.payload) task.edit = true;
				return true;
			});
			return newTasks;
		case "TASK_EDIT_SAVE":
			newTasks = state.slice();
			newTasks.map(task => {
				if (task.id === action.payload.id) {
					task.edit = false;
					task.title = action.payload.title;
				}
				return true;
			});
			return newTasks;
		case "TASK_EDIT_CANCEL":
			newTasks = state.slice();
			newTasks.map(task => {
				if (task.id === action.payload) task.edit = false;
				return true;
			});
			return newTasks;
		default:
			return state;
	}
}

export default tasks;