import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";
// @ts-ignore
import s from './team.module.scss'
import {addTeamToFavourite} from "../../../redux/actions/actions";
import {Btn} from "../../../components/Button/Btn";
import {Link} from 'react-router-dom';

interface IProps {
    name: string,
    teamId: number,
}

export const Team = ({name, teamId}: IProps) => {
    const dispatch = useDispatch()

    const onClickAdd = () => {
        dispatch(addTeamToFavourite(teamId, name))

    }


    return (
        <div className={s.teamWrapper}>
            <Link to={`/players/${teamId}`} style={{textDecoration: 'none', color: '#666666', zIndex: 1}}>
                <div className={s.teamAvatar}>
                    <img src={`https://crests.football-data.org/${teamId}.svg`} alt="team" title={'team'}
                         style={{width: 200}}/>
                </div>
            </Link>
            <div className={s.team}>
                <p>{name}</p>
                <Btn onClick={onClickAdd} title={'+'}/>
            </div>
        </div>
    );
};
