import {IActionType} from "../const/actionTypes";

export interface IRootState {
    currentGroup: string,
    groups: IGroup[],
    tasks: ITask[],
    nextGroupId: number,
    nextTaskId: number
}

// Group
export interface IGroup {
    id: number,
    title: string
}

export interface IGroupProps {
    group: IGroup,
    currentGroup: string,
    setGroup: (data: string) => void
}

export interface IGroupListProps {
    groups: IGroup[],
    currentGroup: string,
    onSetGroup: (data: string) => void
}

export interface IAddGroupProps {
    nextGroupId: number,
    onAddGroup: (data: any) => void,
    onIncGroupId: () => void
}

// Task
export interface ITask {
    id: number,
    group: string,
    title: string,
    done: boolean,
    edit: boolean
}

export interface ITaskProps {
    task: ITask,
    toggleTask: (data: number) => void,
    editTask: (data: number) => void,
    deleteTask: (data: number) => void
}

export interface ITaskListProps {
    tasks: ITask[],
    currentGroup: string,
    toggleTask: (data: number) => void,
    editTask: (data: number) => void,
    deleteTask: (data: number) => void,
    editSave: (data: any) => void,
    editCancel: (data: number) => void
}

export interface IAddTaskProps {
    currentGroup: string,
    nextTaskId: number,
    addTask: (data: any) => void,
    incTaskId: () => void
}

export interface IEditTaskProps {
    task: ITask,
    editSave: (data: any) => void,
    editCancel: (data: number) => void
}

// Action
export interface IAction {
    type: IActionType
}

export interface IAddGroup extends IAction {
    id: number,
    title: string
}

export interface ISetGroup extends IAction {
    title: string
}

export interface IAddTask extends IAction {
    id: number,
    group: string,
    title: string
}

export interface IChangeTask extends IAction {
    id: number
}

// export type IActions = IAddTask | IChangeTask;