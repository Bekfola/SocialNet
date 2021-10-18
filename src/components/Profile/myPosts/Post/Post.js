import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
        <div className={s.item}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/2/2c/Chinchilla-Patchouli.jpg' />
          {props.message}
          <div>
            <span>like {props.likeCount}</span>
          </div>
        </div>
  );
}

export default Post;
