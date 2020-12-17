import React from 'react';
// @ts-ignore
import style from './nav.module.scss';
import {useTranslation} from "react-i18next";
import {Link} from 'react-router-dom';

interface IProps {

}


function Nav() {
    const {t, i18n} = useTranslation()

    return (
        <div className={style.nav}>
            <Link to={'/'}>{t('Teams list')}</Link>
            <Link to={'/profile'}>{t('Profile')}</Link>
        </div>
    );
}

export default Nav;
