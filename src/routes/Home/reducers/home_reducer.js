import { handleGetCurrentLocation, handleGetInputDate } from './handler';

const ACTION_HANDLERS = {
	GET_CURRENT_LOCATION:handleGetCurrentLocation,
	GET_INPUT:handleGetInputDate
}

const initialState = {
	region:{},
	inputData:{}


};

export function HomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}