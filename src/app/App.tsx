import React from 'react';
import {PlayersList} from '../features/PlayersList/PlayersList';
import {TeamsList} from '../features/TeamsList/TeamsList';
import './App.css';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {HashRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    const fetching = useSelector<RootState, boolean>(state => state.appReducer.fetching)

    return (
        <HashRouter>
            <div className="app-wrapper">
                <Switch>
                    <Route exact path={'/'} render={() => <TeamsList fetching={fetching}/>}/>
                    <Route path={'/players/:number'} render={() => <PlayersList fetching={fetching}/>}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
