import React, {useEffect} from 'react';
import {Player} from './Player/Player';
import {Spin} from "../../components/Spin/Spin";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {IPlayer} from "../../api/teams-api";
import {useHistory, useParams} from 'react-router-dom';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {Container} from "../../components/Container/Container";
import {fetchPlayers} from "../../redux/actions/actions";
import {getPlayers} from "../../selectors";

interface IProps {
    fetching: boolean,
}

export const PlayersList = ({fetching}: IProps) => {
    const players = useSelector<RootState, IPlayer[]>(getPlayers)

    let history = useHistory();
    const dispatch = useDispatch()

    const {teamId} = useParams<{ teamId: string }>()

    const handleClick = () => {
        history.push("/");
    }
    useEffect(() => {
        dispatch(fetchPlayers(+teamId))
    }, [teamId])

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

