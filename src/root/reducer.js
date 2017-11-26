import { combineReducers } from 'redux';
import { HomeReducer as home } from '../routes/Home/reducers/home_reducer';

const rootReducer = combineReducers({ 
	home
});

export default rootReducer;