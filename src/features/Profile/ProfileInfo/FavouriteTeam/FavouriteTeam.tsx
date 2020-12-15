import React from 'react';
import {useDispatch} from "react-redux";
import {Btn} from '../../../../components/Button/Btn';
import {removeTeam} from "../../../../redux/actions/actions";
// @ts-ignore
import s from './favouriteTeam.module.scss'

interface IProps {
    name: string
    id: number
}

export const FavouriteTeam = ({name, id}: IProps) => {
    const dispatch = useDispatch()

    const onRemove = () => {
        dispatch(removeTeam(id, name))
    }

    return (
        <div className={s.team}>
            <div>
                <img src={`https://crests.football-data.org/${id}.svg`} alt="team-logo" title={'team-logo'}
                     style={{width: 50, height: 50}}/>
                <p>{name}</p>
            </div>
            <Btn onClick={onRemove} title={'x'}/>
        </div>
    );
};

