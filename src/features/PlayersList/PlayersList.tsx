import React from 'react';
import {Player} from './Player/Player';
import {Spin} from "../../components/Spin/Spin";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {IPlayer} from "../../api/teams-api";
import {useHistory} from 'react-router-dom';

interface IProps {
    fetching: boolean,
}

export const PlayersList = ({fetching}: IProps) => {
    const players = useSelector<RootState, IPlayer[]>(state => state.TeamInfoReducer.players)
    let history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <>
            {
                fetching && <Spin/>
            }
            <div>
                {players.map(i => <Player name={i.name}/>)}
                <button className={'button'} onClick={handleClick}>Back</button>
            </div>
        </>
    );
};

