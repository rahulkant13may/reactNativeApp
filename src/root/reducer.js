import { combineReducers } from 'redux';
import HomeReducer from '../routes/Home/reducers/get_current_location'

const rootReducer = combineReducers({ 
	HomeReducer
});

export default rootReducer;