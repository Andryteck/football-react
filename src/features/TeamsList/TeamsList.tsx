import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Team} from './Team/Team';
import {RootState} from "../../store";
import {ITeam} from "../../api/teams-api";
import {fetchTeams} from '../actions';
import {Spin} from "../../components/Spin/Spin";

interface IProps {
    fetching: boolean
}

export const TeamsList = ({fetching}: IProps) => {
    const teams = useSelector<RootState, ITeam[]>(state => state.TeamInfoReducer.teams)

    const dispatch = useDispatch()

    useEffect(() => {
        const action = fetchTeams()
        dispatch(action)
    }, [])
    return (
        <>
            {
                fetching && <Spin/>
            }
            <div>
                <h1>Teams List:</h1>
                {teams.map(i => <Team name={i.name} key={i.id} teamId={i.id}/>)}
            </div>
        </>
    );
};

