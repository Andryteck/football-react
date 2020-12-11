import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {IItem} from "../../redux/reducers/profile";

interface IProps  {

}

export const Profile = (props: IProps) => {
    const teamsInfo = useSelector<RootState, IItem[]>(state => state.profile.favoriteTeams)
    const playersInfo = useSelector<RootState, IItem[]>(state => state.profile.favoritePlayers)
    return (
        <div>
            <ProfileInfo teamsInfo={teamsInfo} playersInfo={playersInfo}/>
        </div>

    )

}
