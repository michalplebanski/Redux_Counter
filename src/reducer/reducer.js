import * as constants from '../constants';

export const defaultState = {
	sum: 0,
	value: 1
};

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case constants.INCREMENT:
			return {
				...state, sum: sum + value
			};
		case constants.DECREMENT:
			return {
				...state, sum: sum - value
			};
		default:
			return state;
	}
};