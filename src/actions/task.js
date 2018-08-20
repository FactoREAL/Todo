export function addTask(data) {
	return {
		type: "ADD_TASK",
		payload: data
	}
}

export function toggleTask(data) {
	return {
		type: "TASK_TOGGLE",
		payload: data
	};
}

export function editTask(data) {
	return {
		type: "TASK_EDIT",
		payload: data
	};
}

export function deleteTask(data) {
	return {
		type: "TASK_DELETE",
		payload: data
	};
}

export function incTaskId() {
	return {
		type: "INC_TASK_ID"
	};
}

export function editSave(data) {
	return {
		type: "TASK_EDIT_SAVE",
		payload: data
	};
}

export function editCancel(data) {
	return {
		type: "TASK_EDIT_CANCEL",
		payload: data
	};
}