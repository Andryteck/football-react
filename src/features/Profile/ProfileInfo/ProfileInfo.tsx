import React from 'react';
// @ts-ignore
import s from './ProfileInfo.module.scss';
// @ts-ignore
import userImage from "../../../assets/images/userImage.jpg";

interface IProps  {
}

const ProfileInfo = (props: IProps) => {

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={userImage} className={s.pageAvatar}/>
                <div>
                    <b>Full name:</b> Andrei
                </div>
                <div>
                    <b>Favourite teams</b> {}
                </div>
                <div>
                    <b>Favourite players</b> {}
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo
