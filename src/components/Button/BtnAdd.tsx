import React from 'react';
// @ts-ignore
import s from "./BtnAdd.module.scss";

interface IProps {
    onClick: () => void,
    title: string
}

export const BtnAdd = ({onClick, title}: IProps) => {
    return (
        <>
            <button onClick={onClick} className={s.addBtn}>{title}</button>
        </>
    );
};

