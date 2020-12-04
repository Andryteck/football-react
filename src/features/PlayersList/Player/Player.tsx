import React from 'react';
// @ts-ignore
import s from './player.module.scss'

interface IProps {
    name: string,
}

export const Player = ({name}: IProps) => {

    return (
            <div className={s.player}>
                {name}
            </div>
    );
};

