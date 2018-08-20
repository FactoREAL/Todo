const initState = [
	{id: 0, group: 'Работа', title: 'Создавать видимость работы', done: false, edit: false},
	{id: 1, group: 'Личное', title: 'Разобраться с React', done: true, edit: false},
	{id: 2, group: 'Личное', title: 'Разобраться с Redux', done: false, edit: false}
];

function tasks(state = initState, action) {
	let newTasks;
	switch(action.type) {
		case "ADD_TASK":
			return [...state, action.payload]
		case "TASK_TOGGLE":
			newTasks = state.slice();
			newTasks.map(task => {
				if (task.id === action.payload) task.done = true;
				return true;
			});
			return newTasks;
		case "TASK_DELETE":
			newTasks = state.filter(task => task.id !== action.payload);
			return newTasks;
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