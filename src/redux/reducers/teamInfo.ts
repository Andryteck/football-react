import {IPlayer, ITeam} from "../../api/teams-api";
import {ActionType} from "../actions/actions";

export type InitialStateType = {
    teams: ITeam[],
    players: IPlayer[]
}

const initialState:InitialStateType = {
    teams: [],
    players: []
}

export const teamInfoReducer = (state:InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case 'TEAMS/FETCH_TEAMS':
            return {
                ...state, teams: action.payload
            }
        case 'TEAMS/FETCH_PLAYERS':
            return {
                ...state, players: action.payload
            }
        default:
            return state
    }
}
