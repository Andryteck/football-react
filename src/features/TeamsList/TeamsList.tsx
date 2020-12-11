import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Team} from './Team/Team';
import {RootState} from "../../redux/store";
import {ITeam} from "../../api/teams-api";
import {Spin} from "../../components/Spin/Spin";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {fetchTeams} from "../../redux/actions/actions";

interface IProps {
    fetching: boolean,
}

export const TeamsList = ({fetching}: IProps) => {
    const teams = useSelector<RootState, ITeam[]>(state => state.teamInfoReducer.teams)

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
                <div>
                    {teams.map(i => <Team name={i.name} key={i.id} teamId={i.id}/>)}
                </div>
            </Fade>
        </>
    );
};

