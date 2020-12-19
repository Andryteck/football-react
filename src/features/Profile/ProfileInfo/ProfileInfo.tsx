import React from 'react';
// @ts-ignore
import s from './ProfileInfo.module.scss';
// @ts-ignore
import userImage from "../../../assets/images/userImage.jpg";
// @ts-ignore
import Tilt from 'react-tilt'
import {IItem} from "../../../redux/reducers/profile";
import {FavouriteTeam} from "./FavouriteTeam/FavouriteTeam";
import {FavouritePlayer} from './FavouritePlayer/FavooritePlayer';

interface IProps {
    teamsInfo: IItem[],
    playersInfo: IItem[]
}

const ProfileInfo = ({teamsInfo, playersInfo}: IProps) => {

    return (
        <div className={s.descriptionBlock}>
            <Tilt style={{height: 380}} options={{max: 10}}>
                <div className={s.avatarWrapper}>
                    <img src={userImage} className={s.pageAvatar}/>
                </div>
            </Tilt>
            <div className={s.infoWrapper}>
                <div className={s.fullname}>
                    <p>Andrei Kulik</p>
                </div>
                <div className={s.teams}>
                    <p style={{fontWeight: "bold"}}>Favourite teams: </p>
                    {teamsInfo.length ? teamsInfo.map((i: IItem) => <FavouriteTeam key={i.id} name={i.name}
                                                                                   id={i.id}/>) : 'no favourites'}
                </div>
                <div className={s.players}>
                    <p style={{fontWeight: "bold"}}>Favourite players: </p>
                    {playersInfo.length ? playersInfo.map((i: IItem) => <FavouritePlayer key={i.id} name={i.name}
                                                                                         id={i.id}/>) : 'no favourites'}
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo
