import {applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {TeamInfoReducer} from "./features/reducer";
import {takeEvery} from 'redux-saga/effects'
import {appReducer} from "./app/app-reducer";
import {fetchPlayersSaga, fetchTeamsSaga} from "./features/actions";

let reducers = combineReducers({
    TeamInfoReducer,
    appReducer,
})

export type RootState = ReturnType<typeof reducers>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootWatcher)

function* rootWatcher() {
    yield takeEvery('TEAMS/FETCH-TEAMS', fetchTeamsSaga)
    yield takeEvery('TEAMS/FETCH-PLAYERS', fetchPlayersSaga)
}

export default store
