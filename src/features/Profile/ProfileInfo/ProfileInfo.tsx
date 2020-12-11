import React from 'react';
// @ts-ignore
import s from './ProfileInfo.module.scss';
// @ts-ignore
import userImage from "../../../assets/images/userImage.jpg";
import {IItem} from "../../../redux/reducers/profile";
import {FavouriteTeam} from "./FavouriteTeam/FavouriteTeam";

interface IProps {
    teamsInfo: IItem[],
    playersInfo: IItem[]
}

const ProfileInfo = ({teamsInfo, playersInfo}: IProps) => {

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={userImage} className={s.pageAvatar}/>
                <div>
                    <p style={{fontWeight: "bold"}}>Full name:</p>
                    <p>Andrei Kulik</p>
                </div>
                <div>
                    <p style={{fontWeight: "bold"}}>Favourite teams: </p>
                    {teamsInfo.length ? teamsInfo.map((i: IItem) => <FavouriteTeam key={i.id} name={i.name} id={i.id}/>) : 'no favourites'}
                </div>
                <div>
                    <p style={{fontWeight: "bold"}}>Favourite players: </p>
                    {playersInfo.length ? playersInfo.map((i: IItem) => <p key={i.id}>{i.name}</p>) : 'no favourites'}

                </div>
            </div>
        </div>

    )
}

export default ProfileInfo
