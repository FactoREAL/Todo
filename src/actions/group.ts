import { groupActionType } from '../const/actionTypes';
import {IAction, IAddGroup, ISetGroup} from "../types";

interface IAddProps {
	id: number,
	title: string
}

export function addGroup(data: IAddProps): IAddGroup {
	return {
        id: data.id,
        title: data.title,
        type: groupActionType.ADD_GROUP
    };
}

export function incGroupId(): IAction {
	return {
		type: groupActionType.INC_GROUP_ID
	};
}

export function setGroup(data: string): ISetGroup {
	return {
        title: data,
        type: groupActionType.SET_GROUP
	};
}