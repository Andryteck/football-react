import {applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery} from 'redux-saga/effects'
import {appReducer} from "../app/app-reducer";
import {
    addToFavoritePlayerSaga,
    addToFavoriteTeamSaga,
    fetchPlayersSaga,
    fetchTeamsSaga, removePlayerSaga,
    removeTeamSaga
} from "./actions/actions";
import {profile} from "./reducers/profile";
import {teamInfoReducer} from "./reducers/teamInfo";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let reducers = combineReducers({
    teamInfoReducer,
    appReducer,
    profile
})

export type RootState = ReturnType<typeof reducers>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export const getStore = () => {
    const persistConfig = {key: "root", storage};
    const persistedReducer = persistReducer(persistConfig, reducers);

    const sagaMiddleWare = createSagaMiddleware()

// @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));

    const persistor = persistStore(store);

    sagaMiddleWare.run(rootWatcher)

    function* rootWatcher() {
        yield takeEvery('TEAMS/FETCH-TEAMS', fetchTeamsSaga)
        yield takeEvery('TEAMS/FETCH-PLAYERS', fetchPlayersSaga)
        yield takeEvery('FAVOURITES/ADD-TEAM', addToFavoriteTeamSaga)
        yield takeEvery('FAVOURITES/ADD-PLAYER', addToFavoritePlayerSaga)
        yield takeEvery('FAVOURITES/REMOVE-TEAM', removeTeamSaga)
        yield takeEvery('FAVOURITES/REMOVE-PLAYER', removePlayerSaga)
    }

    return {persistor, store};
}

