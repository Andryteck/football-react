import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
// @ts-ignore
import s from './team.module.scss'
import {addTeamToFavourite, fetchPlayers} from "../../../redux/actions/actions";
import {BtnAdd} from "../../../components/Button/BtnAdd";
import {Link} from 'react-router-dom';

interface IProps {
    name: string,
    teamId: number,
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
                <img src={`https://crests.football-data.org/${teamId}.svg`} alt="team" title={'team'}
                     style={{width: 200, height: 200}} onClick={onClickHandler}/>
            </Link>
            <div className={s.team}>
                {name}
            </div>
            <BtnAdd onClick={onClickAdd} title={'+'}/>
        </div>
    );
};
