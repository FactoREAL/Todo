import { ADD_GROUP, INC_GROUP_ID, SET_GROUP } from '../const/actions';

export function addGroup(data) {
	return {
		type: ADD_GROUP,
		payload: data
	};
}

export function incGroupId() {
	return {
		type: INC_GROUP_ID
	};
}

export function setGroup(data) {
	return {
		type: SET_GROUP,
		payload: data
	};
}