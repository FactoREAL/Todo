import { groupActionType } from '../const/actionTypes';
import {IAddGroup, IGroup} from "../types";

const initState = [
	{id: 0, title: 'Работа'},
	{id: 1, title: 'Личное'}
];

function groups(state: IGroup[] = initState, action: IAddGroup) {
	switch(action.type) {
		case groupActionType.ADD_GROUP:
			return [...state, {id: action.id, title: action.title}];
		default:
			return state;
	}
}

export default groups;