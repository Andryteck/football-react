import {ActionType} from './actions';
import {IPlayer, ITeam} from "../api/teams-api";

type InitialStateType = {
    teams: ITeam[],
    players: IPlayer[]
}

const initialState:InitialStateType = {
    teams: [],
    players: []
}

export const TeamInfoReducer = (state:InitialStateType = initialState, action: ActionType):InitialStateType => {
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
