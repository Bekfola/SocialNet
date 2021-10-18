import React from 'react';
import s from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer 
        store={props.store}
     
      />
    </div>
  );
}

export default Profile;
