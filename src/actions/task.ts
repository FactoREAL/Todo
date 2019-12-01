import { taskActionType } from "../const/actionTypes";
import { IAction, IEditTask, INewTask } from "../types";

interface IChangeTask {
  id: number;
}

export function addTask(task: INewTask): IAction<INewTask> {
  return {
    payload: {
      group: task.group,
      id: task.id,
      title: task.title
    },
    type: taskActionType.ADD_TASK
  };
}

export function toggleTask(id: number): IAction<IChangeTask> {
  return {
    payload: {
      id
    },
    type: taskActionType.TASK_TOGGLE
  };
}

export function editTask(id: number): IAction<IChangeTask> {
  return {
    payload: {
      id
    },
    type: taskActionType.TASK_EDIT
  };
}

export function deleteTask(id: number): IAction<IChangeTask> {
  return {
    payload: {
      id
    },
    type: taskActionType.TASK_DELETE
  };
}

export function incTaskId(): IAction<null> {
  return {
    type: taskActionType.INC_TASK_ID
  };
}

export function editSave(task: IEditTask): IAction<IEditTask> {
  return {
    payload: task,
    type: taskActionType.TASK_EDIT_SAVE
  };
}

export function editCancel(id: number): IAction<IChangeTask> {
  return {
    payload: {
      id
    },
    type: taskActionType.TASK_EDIT_CANCEL
  };
}
