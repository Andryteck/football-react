import React from 'react';
import {useDispatch} from "react-redux";
import {removeTeam} from "../../../../redux/actions/actions";
// @ts-ignore
import s from './favouritePlayer.module.scss'
import {Btn} from "../../../../components/Button/Btn";
import {Letter, PlayerAvatar} from "../../../PlayersList/Player/Player";
import {getAvatarColor} from "../../../../utils/getAvatarColor";

interface IProps {
    name: string
    id: number
}

export const FavouritePlayer = ({name, id}: IProps) => {
    const dispatch = useDispatch()
    const avatarColors = getAvatarColor(name[0].toUpperCase());

    const onRemove = () => {
        dispatch(removeTeam(id, name))
    }

    return (
        <div className={s.player}>
            <div>
                <PlayerAvatar style={{
                    backgroundColor: avatarColors.background,
                    width: 50, height: 50, marginRight:10
                }}>
                    <Letter style={{color: avatarColors.color, fontSize: 20, marginTop: 23}}>
                        {name[0].toUpperCase()}
                    </Letter>
                </PlayerAvatar>
                <p>{name}</p>
            </div>
            <Btn onClick={onRemove} title={'x'}/>
        </div>
    );
};

