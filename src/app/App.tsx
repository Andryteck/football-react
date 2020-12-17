import React, {useEffect, useState} from 'react';
import {PlayersList} from '../features/PlayersList/PlayersList';
import {TeamsList} from '../features/TeamsList/TeamsList';
import './App.css';
import {useSelector} from "react-redux";
import {getStore, RootState} from "../redux/store";
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from "../features/Header/Header";
import {Profile} from '../features/Profile/Profile';
import {PersistGate} from 'redux-persist/integration/react';
import {getFetching} from "../selectors";
import {useTranslation} from 'react-i18next';
import {langs} from "../i18n";


const App = () => {
    const [currentLanguage, setCurrentLanguage] = useState<number>(0)
    const {t, i18n} = useTranslation();

    const fetching = useSelector<RootState, boolean>(getFetching)
    const {persistor} = getStore();

    // useEffect(() => {
    //     i18n.changeLanguage(langs[currentLanguage])
    // }, [currentLanguage])

    return (
        <>
            <PersistGate persistor={persistor}>
                <HashRouter>
                    <Header setCurrentLanguage={setCurrentLanguage} lang={currentLanguage}/>
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
