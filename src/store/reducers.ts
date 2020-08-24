// import { GET_ROBOTS } from './actions'
import { ActionTypes, Action } from "./types"
import { combineReducers } from 'redux';


// this catches bugs that might be introduced in previous steps. Also acts as a documentation for the whole app state.
interface StoreState {
    robots: Array<Robot>
}


// enum Actions {
//     getRobots = getRobots
// }

// state will be an array of robots with default value []
const robots = (state: Robot[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.getRobots:
            return [...action.robots];
        default:
            return state;
    }
}

export default combineReducers<StoreState>({
    robots
})
