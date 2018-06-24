import * as constants from '../constants';

export const incrementCount = () => {
	return {
		type: constants.INCREMENT
	};
};

export const decrementCount = () => {
	return {
		type: constants.DECREMENT
	};
};