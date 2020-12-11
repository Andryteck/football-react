import {call, put} from "redux-saga/effects";
import {InferActionTypes} from "../store";
import {IPlayer, ITeam, TeamsAPI} from "../../api/teams-api";
import {startFetching, stopFetching} from "../../app/app-reducer";

export type ActionType = InferActionTypes<typeof actions>


export const actions = {
    getTeams: (payload: ITeam[]) => ({
        type: 'TEAMS/FETCH_TEAMS', payload
    } as const),
    getPlayers: (payload: IPlayer[]) => ({
        type: 'TEAMS/FETCH_PLAYERS', payload
    } as const),
    addToFavoriteTeam: (name: string, teamId: number) => ({
        type: 'FAVOURITES/ADD_TEAM', name, teamId
    } as const),
    addToFavoritePlayer: (name: string, playerId: number) => ({
        type: 'FAVOURITES/ADD_PLAYER', name, playerId
    } as const),
    removeTeam: (id: number, name: string) => ({
        type: 'FAVOURITES/REMOVE_TEAM', id, name
    } as const)
}

//sagas

export function* fetchTeamsSaga() {
    yield put(startFetching())

    const res = yield call(TeamsAPI.getTeams)
    const teams = res.data.teams

    yield put(actions.getTeams(teams))
    yield put(stopFetching())

}

export const fetchTeams = () => ({type: 'TEAMS/FETCH-TEAMS'})

export function* fetchPlayersSaga(action: ReturnType<typeof fetchPlayers>) {
    yield put(startFetching())

    const res = yield call(TeamsAPI.getPlayersOfCurrentTeam, action.teamId)
    const players = res.data.squad

    yield put(actions.getPlayers(players))
    yield put(stopFetching())

}

export const fetchPlayers = (teamId: number) => ({type: 'TEAMS/FETCH-PLAYERS', teamId})

export function* addToFavoriteTeamSaga(action: ReturnType<typeof addTeamToFavourite>) {
    yield put(actions.addToFavoriteTeam(action.name, action.teamId))

}

export const addTeamToFavourite = (teamId: number, name: string) => ({type: 'FAVOURITES/ADD-TEAM', teamId, name})

export function* addToFavoritePlayerSaga(action: ReturnType<typeof addPlayerToFavourite>) {
    yield put(actions.addToFavoritePlayer(action.name, action.playerId))

}

export const addPlayerToFavourite = (playerId: number, name: string) => ({
    type: 'FAVOURITES/ADD-PLAYER',
    playerId,
    name
})


export function* removeTeamSaga(action: ReturnType<typeof removeTeam>) {
    yield put(actions.removeTeam(action.id, action.name))
}

export const removeTeam = (id: number, name: string) => ({type: 'FAVOURITES/REMOVE-TEAM', id, name})


