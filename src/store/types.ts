import { getRobots } from './actions'
export enum ActionTypes {
    getRobots // getRobots : 0 by default
}
export type Action = getRobots



// if we add more actions 
// export type Action = getRobots | getUsers | postUsers