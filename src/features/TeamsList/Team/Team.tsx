import React, {useCallback, useState} from 'react';
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
    const [isShow, setIsShow] = useState<boolean>(true)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(fetchPlayers(teamId))

    }
    const onClickAdd = () => {
        dispatch(addTeamToFavourite(teamId, name))
        setIsShow(false)
    }


    return (
        <div className={s.teamWrapper}>
            <Link to={`/players/${teamId}`} style={{textDecoration: 'none', color: '#666666'}}>
                <div className={s.teamAvatar}>
                    <img src={`https://crests.football-data.org/${teamId}.svg`} alt="team" title={'team'}
                         onClick={onClickHandler} style={{width: 200}}/>
                    <BtnAdd onClick={onClickAdd} title={'+'}/>
                </div>
            </Link>
            <div className={s.team}>
                {name}
            </div>
        </div>
    );
};
