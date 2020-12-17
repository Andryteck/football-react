import React from 'react';
// @ts-ignore
import style from './Header.module.scss'
import Nav from '../../components/Nav/Nav';
import {useTranslation} from "react-i18next";
// @ts-ignore
import eath from "../../assets/images/eath.svg";
import {langs} from "../../i18n";

interface IProps {
    setCurrentLanguage: React.Dispatch<React.SetStateAction<number>>
    lang: number
}

function Header({setCurrentLanguage, lang}: IProps) {
    const {t, i18n} = useTranslation()

    const changeLanguage = () => {
        if (lang + 1 < langs.length) {
            setCurrentLanguage(lang + 1)
            i18n.changeLanguage(langs[lang + 1])

        } else {
            i18n.changeLanguage(langs[0])
            setCurrentLanguage(0)
        }
    }


    return (
        <div className={style.header}>
            <Nav/>
            <div>
                <div className={style.earth} onClick={() => changeLanguage()}>
                    <img src={eath} alt="world"/>
                </div>
                <p className={style.text} onClick={() => changeLanguage()}>
                    {langs[lang].toUpperCase()}
                </p>
            </div>
        </div>
    );
}

export default Header;
