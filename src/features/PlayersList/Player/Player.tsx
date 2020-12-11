import React from 'react';
// @ts-ignore
import s from './player.module.scss'
import {addPlayerToFavourite} from "../../../redux/actions/actions";
import {BtnAdd} from "../../../components/Button/BtnAdd";
import {useDispatch} from "react-redux";

interface IProps {
    name: string,
    playerId: number
}

export const Player = ({name, playerId}: IProps) => {
    const dispatch = useDispatch()

    const onClickAdd = () => {
        dispatch(addPlayerToFavourite(playerId, name))
    }
    return (
        <div className={s.playerWrapper}>
            <div className={s.player}>
                {name}
            </div>
            <BtnAdd onClick={onClickAdd} title={'+'}/>
        </div>
    );
};

