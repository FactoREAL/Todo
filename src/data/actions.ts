import { IAction, IActiveGroup, IEditTask, IGroup, INewTask } from "./models";
import { groupActionType, taskActionType } from "./constants";

export function addGroup(group: IGroup): IAction<IGroup> {
  return {
    payload: {
      id: group.id,
      title: group.title
    },
    type: groupActionType.ADD_GROUP
  };
}

export function incGroupId(): IAction<null> {
  return {
    type: groupActionType.INC_GROUP_ID
  };
}

export function setGroup(title: string): IAction<IActiveGroup> {
  return {
    payload: {
      title
    },
    type: groupActionType.SET_GROUP
  };
}

type ChangeTask = {
  id: number;
};

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

export function toggleTask(id: number): IAction<ChangeTask> {
  return {
    payload: {
      id
    },
    type: taskActionType.TASK_TOGGLE
  };
}

export function editTask(id: number): IAction<ChangeTask> {
  return {
    payload: {
      id
    },
    type: taskActionType.TASK_EDIT
  };
}

export function deleteTask(id: number): IAction<ChangeTask> {
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

export function editCancel(id: number): IAction<ChangeTask> {
  return {
    payload: {
      id
    },
    type: taskActionType.TASK_EDIT_CANCEL
  };
}
