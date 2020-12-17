import {HashRouter} from "react-router-dom";
import {PublicRoutes} from "./PublicRoutes";
import React, {useState} from "react";
import Header from "../features/Header/Header";


export const AppNavigator = () => {
    const [currentLanguage, setCurrentLanguage] = useState<number>(0)
    return (
        <HashRouter>
            <Header setCurrentLanguage={setCurrentLanguage} lang={currentLanguage}/>
            <div className="app-wrapper">
                <PublicRoutes/>
            </div>
        </HashRouter>
    );
};
