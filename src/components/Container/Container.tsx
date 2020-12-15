import React from 'react';
// @ts-ignore
import s from './container.module.scss'

interface IProps {
    children: any
}

export const Container = ({children}: IProps) => {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    );
};

