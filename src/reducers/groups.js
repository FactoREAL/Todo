import { ADD_GROUP } from '../const/actions';

const initState = [
	{id: 0, title: 'Работа'},
	{id: 1, title: 'Личное'}
];

function groups(state = initState, action) {
	switch(action.type) {
		case ADD_GROUP:
			return [...state, action.payload];
		default:
			return state;
	}
}

export default groups;