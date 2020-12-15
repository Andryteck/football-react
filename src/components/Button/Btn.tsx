import React from 'react';
// @ts-ignore
import s from "./Button.module.scss";

interface IProps {
    onClick: () => void,
    title: string
}

export const Btn = ({onClick, title}: IProps) => {
    return (
        <>
            <button onClick={onClick} className={s.addBtn}>{title}</button>
        </>
    );
};

