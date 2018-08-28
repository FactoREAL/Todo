import { groupActionType } from '../const/actionTypes';
import {IAction} from "../types";

function nextGroupId(state: number = 2, action: IAction) {
	switch(action.type) {
		case groupActionType.INC_GROUP_ID:
			return state + 1;
		default:
			return state;
	}
}

export default nextGroupId;