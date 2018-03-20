import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import coursesReducer from './coursesReducer.js';

const reducer = combineReducers({
    routing: routerReducer,
    courses: coursesReducer
});

export default reducer