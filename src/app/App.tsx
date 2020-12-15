import React from 'react';
import {PlayersList} from '../features/PlayersList/PlayersList';
import {TeamsList} from '../features/TeamsList/TeamsList';
import './App.css';
import {useSelector} from "react-redux";
import {getStore, RootState} from "../redux/store";
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from "../features/Header/Header";
import {Profile} from '../features/Profile/Profile';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
    const fetching = useSelector<RootState, boolean>(state => state.appReducer.fetching)
    const {persistor} = getStore();

    return (
        <>
            <PersistGate persistor={persistor}>
                <Header/>
                <HashRouter>
                    <div className="app-wrapper">
                        <Switch>
                            <Route exact path={'/'} render={() => <TeamsList fetching={fetching}/>}/>
                            <Route path={'/players/:teamId'} render={() => <PlayersList fetching={fetching}/>}/>
                            <Route path={'/profile'} render={() => <Profile/>}/>
                        </Switch>
                    </div>
                </HashRouter>
            </PersistGate>
        </>
    );
}

export default App;
