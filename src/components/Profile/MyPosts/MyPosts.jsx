import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let dataPosts = [
        {id:'1', message:'Whats app?', like: '13'},
        {id:'2', message:'How are you', like: '42'},
        {id:'3', message:'I am fine. Thanks', like: '5'},
        {id:'4', message:'What about you?', like: '27'},
        {id:'5', message:'Not bad.', like: '15'},
        {id:'6', message:'Never mind. I am Ok.', like: '9'},
    ];

    let createPost =  dataPosts.map(post => <Post message={post.message} like={post.like} />);

    return (
        <div className={style.myPosts}>
        <form className={style.form}>
        <textarea></textarea>
        <button>Send</button>
        </form>
       {createPost}
        {/* <Post message={dataPosts[0].message} like={dataPosts[0].like} />
        <Post message={dataPosts[1].message} like={dataPosts[1].like} />
        <Post message={dataPosts[2].message} like={dataPosts[2].like} />
        <Post message={dataPosts[3].message} like={dataPosts[3].like} />
        <Post message={dataPosts[4].message} like={dataPosts[4].like} />
        <Post message={dataPosts[5].message} like={dataPosts[5].like} /> */}
        </div>
    );
}

export default MyPosts;