import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Team} from './Team/Team';
import {RootState} from "../../redux/store";
import {ITeam} from "../../api/teams-api";
import {Spin} from "../../components/Spin/Spin";
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import s from './teamlist.module.scss'
import {fetchTeams} from "../../redux/actions/actions";
import {Container} from "../../components/Container/Container";
import {getTeams} from "../../selectors";

interface IProps {
    fetching: boolean,
}

export const TeamsList = ({fetching}: IProps) => {
    const teams = useSelector<RootState, ITeam[]>(getTeams)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTeams())
    }, [])

    return (
        <>
            {
                fetching && <Spin/>
            }
            <Fade right>
                <Container>
                    {teams.map(i => <Team name={i.name} key={i.id} teamId={i.id}/>)}
                </Container>
            </Fade>
        </>
    );
};

