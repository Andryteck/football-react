import React from 'react';
import {fetchPlayers} from "../../actions";
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
// @ts-ignore
import s from './team.module.scss'

interface IProps {
    name: string,
    teamId: number
}

export const Team = ({name, teamId}: IProps) => {
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(fetchPlayers(teamId))

    }

    return (
        <Link to={`/players/${teamId}`} style={{textDecoration: 'none', color: 'black'}}>
            <div onClick={onClickHandler} className={s.team}>
                {name}
            </div>
        </Link>
    );
};

