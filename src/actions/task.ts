import { taskActionType } from '../const/actionTypes';
import {IAction, IAddTask, IChangeTask} from "../types";

interface IAddProps {
	id: number,
	group: string,
	title: string
}

export function addTask(data: IAddProps): IAddTask {
	return {
        group: data.group,
        id: data.id,
        title: data.title,
        type: taskActionType.ADD_TASK
	}
}

export function toggleTask(data: number): IChangeTask {
	return {
        id: data,
        type: taskActionType.TASK_TOGGLE
	};
}

export function editTask(data: number): IChangeTask {
	return {
        id: data,
        type: taskActionType.TASK_EDIT
	};
}

export function deleteTask(data: number): IChangeTask {
	return {
        id: data,
        type: taskActionType.TASK_DELETE
	};
}

export function incTaskId(): IAction {
	return {
		type: taskActionType.INC_TASK_ID
	};
}

export function editSave(data: any) {
	return {
        payload: data,
        type: taskActionType.TASK_EDIT_SAVE
	};
}

export function editCancel(data: any) {
	return {
        payload: data,
        type: taskActionType.TASK_EDIT_CANCEL
	};
}