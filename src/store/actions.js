import { _fetchRobots } from "./fetch"
export const GET_ROBOTS = "GET_ROBOTS";

const getRobots = (robots) => {
    return {
        type: GET_ROBOTS,
        robots
    }
}

export const fetchRobots = () => (dispatch) => _fetchRobots()
    .then(robots => dispatch(getRobots(robots))).then(result => result.robots)
