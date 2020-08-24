import { _fetchRobots } from "./fetch"
import { ActionTypes } from './types'
import { Dispatch } from 'redux'

// Creating the interface so we can use it with dispatch
export interface getRobots {
    type: ActionTypes.getRobots;
    robots: Array<Robot>;
}

const getRobots = (robots: Array<Robot>) => {
    return {
        type: ActionTypes.getRobots,
        robots
    }
}

export const fetchRobots = () => (dispatch: Dispatch) => _fetchRobots()
    .then(robots => dispatch<getRobots>(getRobots(robots)))
    .then(result => result.robots)
