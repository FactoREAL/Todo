import { groupActionType } from '../const/actionTypes';
import {ISetGroup} from "../types";

function currentGroup(state: string = '', action: ISetGroup) {
	switch(action.type) {
		case groupActionType.SET_GROUP:
			return action.title;
		default:
			return state;
	}
}

export default currentGroup;