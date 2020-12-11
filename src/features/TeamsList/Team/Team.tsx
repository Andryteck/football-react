import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
// @ts-ignore
import s from './team.module.scss'
import {addTeamToFavourite, fetchPlayers} from "../../../redux/actions/actions";
import {BtnAdd} from "../../../components/Button/BtnAdd";

interface IProps {
    name: string,
    teamId: number
}

export const Team = ({name, teamId}: IProps) => {
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(fetchPlayers(teamId))

    }
    const onClickAdd = () => {
        dispatch(addTeamToFavourite(teamId, name))

    }

    return (
        <div className={s.teamWrapper}>
            <Link to={`/players/${teamId}`} style={{textDecoration: 'none', color: '#666666'}}>
                <div onClick={onClickHandler} className={s.team}>
                    {name}
                </div>
            </Link>
            <BtnAdd onClick={onClickAdd} title={'+'}/>
        </div>
    );
};

