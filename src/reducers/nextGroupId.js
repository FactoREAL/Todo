import { INC_GROUP_ID } from '../const/actions';

function nextGroupId(state = 2, action) {
	switch(action.type) {
		case INC_GROUP_ID:
			return state + 1;
		default:
			return state;
	}
}

export default nextGroupId;