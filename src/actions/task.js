import { ADD_TASK, TASK_TOGGLE, TASK_EDIT, TASK_DELETE, INC_TASK_ID, TASK_EDIT_SAVE, TASK_EDIT_CANCEL } from '../const/actions';

export function addTask(data) {
	return {
		type: ADD_TASK,
		...data
	}
}

export function toggleTask(data) {
	return {
		type: TASK_TOGGLE,
		id: data
	};
}

export function editTask(data) {
	return {
		type: TASK_EDIT,
		id: data
	};
}

export function deleteTask(data) {
	return {
		type: TASK_DELETE,
		id: data
	};
}

export function incTaskId() {
	return {
		type: INC_TASK_ID
	};
}

export function editSave(data) {
	return {
		type: TASK_EDIT_SAVE,
		payload: data
	};
}

export function editCancel(data) {
	return {
		type: TASK_EDIT_CANCEL,
		payload: data
	};
}