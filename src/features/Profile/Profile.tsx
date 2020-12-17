import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {IItem} from "../../redux/reducers/profile";
import {getFavouritePlayers, getFavouriteTeams} from "../../selectors";


export const Profile = () => {
    const teamsInfo = useSelector<RootState, IItem[]>(getFavouriteTeams)
    const playersInfo = useSelector<RootState, IItem[]>(getFavouritePlayers)

    return (
        <div>
            <ProfileInfo teamsInfo={teamsInfo} playersInfo={playersInfo}/>
        </div>

    )

}
