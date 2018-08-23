import { INC_TASK_ID } from '../const/actions';

function nextTaskId(state = 3, action) {
	switch(action.type) {
		case INC_TASK_ID:
			return state + 1;
		default:
			return state;
	}
}

export default nextTaskId;