import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
      <div className={style.postWrap}>
      <img className={style.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWuUMkgU2O-I6OPYiJh8qMM4A5UGqCl-pOw&usqp=CAU' />
      <p>{props.message}</p>
      <button>Like {props.like}</button>
      </div>
    );
}

export default Post;