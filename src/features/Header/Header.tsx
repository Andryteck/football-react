import React from 'react';
// @ts-ignore
import style from './Header.module.scss'
import Nav from '../../components/Nav/Nav';

interface IProps {

}

function Header({}: IProps) {

    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
}

export default Header;
