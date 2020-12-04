import {call, put} from "redux-saga/effects";
import {InferActionTypes} from "../store";
import {IPlayer, ITeam, TeamsAPI} from "../api/teams-api";
import {startFetching, stopFetching} from "../app/app-reducer";

export type ActionType = InferActionTypes<typeof actions>


export const actions = {
    getTeams: (payload: ITeam[]) => ({
        type: 'TEAMS/FETCH_TEAMS', payload
    } as const),
    getPlayers: (payload: IPlayer[]) => ({
        type: 'TEAMS/FETCH_PLAYERS', payload
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



