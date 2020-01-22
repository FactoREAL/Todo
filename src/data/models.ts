import {IActionType} from "./constants";

export interface IRootState {
  currentGroup: string;
  groups: IGroup[];
  tasks: ITask[];
  nextGroupId: number;
  nextTaskId: number;
}

// Group
export interface IGroup {
  id: number;
  title: string;
}

export interface IActiveGroup {
  title: string;
}

export interface IGroupProps {
  group: IGroup;
  currentGroup: string;
  setGroup: (title: string) => void;
}

// export interface IGroupListProps {
//   groups: IGroup[];
//   currentGroup: string;
//   onSetGroup: (title: string) => void;
// }

// Task
export interface ITask {
  id: number;
  group: string;
  title: string;
  done: boolean;
  edit: boolean;
}

export interface INewTask {
  id: number;
  group: string;
  title: string;
}

export interface IEditTask {
  id: number;
  title: string;
}

export interface ITaskProps {
  task: ITask;
  toggleTask: (id: number) => void;
  editTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export interface ITaskListProps {
  tasks: ITask[];
  currentGroup: string;
  toggleTask: (id: number) => void;
  editTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editSave: (task: IEditTask) => void;
  editCancel: (id: number) => void;
}

export interface IEditTaskProps {
  task: ITask;
  editSave: (task: IEditTask) => void;
  editCancel: (id: number) => void;
}

// Action
export interface IAction<T> {
  payload?: T;
  type: IActionType;
}
