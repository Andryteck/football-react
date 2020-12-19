import React, {useState} from 'react';
// @ts-ignore
import s from './player.module.scss'
import {addPlayerToFavourite, fetchPlayers} from "../../../redux/actions/actions";
import {Btn} from "../../../components/Button/Btn";
import {useDispatch} from "react-redux";
import {getAvatarColor} from '../../../utils/getAvatarColor';
import styled from 'styled-components';

interface IProps {
    name: string,
    playerId: number
}

export const Player = ({name, playerId}: IProps) => {
    const [isClick, setIsClick] = useState<boolean>(true)
    const dispatch = useDispatch()
    const avatarColors = getAvatarColor(name[0].toUpperCase());

    const onClickAdd = () => {
        dispatch(addPlayerToFavourite(playerId, name))
        setIsClick(false)
    }

    return (
        <div className={s.playerWrapper}>
            <PlayerAvatar style={{
                backgroundColor: avatarColors.background
            }}>
                <Letter style={{color: avatarColors.color}}>
                    {name[0].toUpperCase()}
                </Letter>
            </PlayerAvatar>
            <div className={s.player}>
                <p>{name}</p>
                {isClick && <Btn onClick={onClickAdd} title={'+'}/>}
            </div>
        </div>
    );
};


export const PlayerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;

`

export const Letter = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-top: -1px;
`

