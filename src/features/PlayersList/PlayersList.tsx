import React from 'react';
import {Player} from './Player/Player';
import {Spin} from "../../components/Spin/Spin";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {IPlayer} from "../../api/teams-api";
import {useHistory} from 'react-router-dom';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {Container} from "../../components/Container/Container";

interface IProps {
    fetching: boolean,
}

export const PlayersList = ({fetching}: IProps) => {
    const players = useSelector<RootState, IPlayer[]>(state => state.teamInfoReducer.players)
    let history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <>
            {
                fetching && <Spin/>
            }
            <Fade right>
                <Container>
                    {players.map(i => <Player name={i.name} key={i.id} playerId={i.id}/>)}
                </Container>
            </Fade>
            <button className={'button'} onClick={handleClick}>Back</button>
        </>
    );
};

