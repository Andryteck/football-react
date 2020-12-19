import {ActionType} from "../actions/actions";
import produce from 'immer'

export interface IItem {
    name: string,
    id: number
}


type InitialStateType = {
    favoriteTeams: IItem[],
    favoritePlayers: IItem[],

}

const initialState: InitialStateType = {
    favoriteTeams: [],
    favoritePlayers: []
}

export const profile = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FAVOURITES/ADD_TEAM":
            let filteredStateByTeams = state.favoriteTeams.filter((i) => {
                return i.id !== action.teamId
            })
            return {
                ...state,
                favoriteTeams: produce(filteredStateByTeams, draft => {
                    draft.push({name: action.name, id: action.teamId})
                })
            }
            // return {
            //     ...state,
            //     favoriteTeams: [...filteredStateByTeams, {name: action.name, id: action.teamId}]
            // }
        case "FAVOURITES/ADD_PLAYER":
            let filteredStateByPlayers = state.favoritePlayers.filter((i) => {
                return i.id !== action.playerId
            })
            return {
                ...state,
                favoritePlayers: [...filteredStateByPlayers, {name: action.name, id: action.playerId}]
            }
        case "FAVOURITES/REMOVE_TEAM":
            return {
                ...state,
                favoriteTeams: [...state.favoriteTeams.filter(i => i.id !== action.payload.id)]
            }
        case "FAVOURITES/REMOVE_PLAYER":
            return {
                ...state,
                favoritePlayers: [...state.favoritePlayers.filter(i => i.id !== action.payload.id)]
            }
        default:
            return state
    }
}
