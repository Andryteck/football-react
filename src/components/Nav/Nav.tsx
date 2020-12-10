import React from 'react';
// @ts-ignore
import style from './nav.module.scss';

interface IProps {

}


function Nav({}: IProps) {

    return (
        <div className={style.nav}>
            <a href={'#/'}>Teams list</a>
            <a href={'#/profile'}>Profile</a>
        </div>
    );
}

export default Nav;
