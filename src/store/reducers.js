import { GET_ROBOTS } from './actions'

import { combineReducers } from 'redux';


const robots = (state = [], action) => {
    switch (action.type) {
        case GET_ROBOTS:
            return [...state, ...action.robots];
        default:
            return state;
    }
}

export default combineReducers({
    robots
})
