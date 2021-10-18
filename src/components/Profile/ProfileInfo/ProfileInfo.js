import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src='https://wordyou.ru/wp-content/uploads/2021/08/krasivye-kartinki-otkrytki-i-gifki-s-vsemirnym-dnem-koshek-8-avgusta-1-755x390.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        <h2>{props.profile.fullName}</h2>
        <img src={props.profile.photos.large} />
        <div>{props.profile.aboutMe}</div>
        <div>{ props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</div>
        <div>в области: {props.profile.lookingForAJobDescription}</div>
      </div>

    </div>
  );
}

export default ProfileInfo;
