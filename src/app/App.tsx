import React, {useEffect, useState} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {getStore, RootState} from "../redux/store";
import Header from "../features/Header/Header";
import {PersistGate} from 'redux-persist/integration/react';
import {getFetching} from "../selectors";
import {AppNavigator} from '../navigation';


const App = () => {

    const {persistor} = getStore();

    return (
        <>
            <PersistGate persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </>
    );
}

export default App;
