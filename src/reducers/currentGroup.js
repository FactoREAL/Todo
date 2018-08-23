import { SET_GROUP } from '../const/actions';

function currentGroup(state = '', action) {
	switch(action.type) {
		case SET_GROUP:
			return action.payload;
		default:
			return state;
	}
}

export default currentGroup;