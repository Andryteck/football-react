import React from 'react';
import {PlayersList} from '../features/PlayersList/PlayersList';
import {TeamsList} from '../features/TeamsList/TeamsList';
import './App.css';
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from "../features/Header/Header";
import { Profile } from '../features/Profile/Profile';

const App = () => {
    const fetching = useSelector<RootState, boolean>(state => state.appReducer.fetching)


    return (
        <>
        <Header/>
        <HashRouter>
            <div className="app-wrapper">
                <Switch>
                    <Route exact path={'/'} render={() => <TeamsList fetching={fetching}/>}/>
                    <Route path={'/players/:number'} render={() => <PlayersList fetching={fetching}/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                </Switch>
            </div>
        </HashRouter>
            </>
    );
}

export default App;
