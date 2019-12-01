// task
export enum taskActionType {
  ADD_TASK = "ADD_TASK",
  TASK_TOGGLE = "TASK_TOGGLE",
  TASK_EDIT = "TASK_EDIT",
  TASK_DELETE = "TASK_DELETE",
  INC_TASK_ID = "INC_TASK_ID",
  TASK_EDIT_SAVE = "TASK_EDIT_SAVE",
  TASK_EDIT_CANCEL = "TASK_EDIT_CANCEL"
}

// group
export enum groupActionType {
  ADD_GROUP = "ADD_GROUP",
  INC_GROUP_ID = "INC_GROUP_ID",
  SET_GROUP = "SET_GROUP"
}

export type IActionType = taskActionType | groupActionType;
