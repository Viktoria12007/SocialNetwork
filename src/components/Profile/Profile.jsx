import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
    <div>
        <div className={style.banner}></div>
        <div className={style.card}>
            <img className={style.img} src="https://lh3.googleusercontent.com/proxy/K-xJ2ZNJU-Ri3eeB1MsYDMeqJRZpWhlFWfKDm7U27SaaagGcndPegzhhSiXRt6t3wcb1N50ItsHK2brFNhWhenRt_DdD6GIzS4TuNqG3m1Hp_5u2PakVlvJ9BIRfVud7bEwHGA"></img>
            <div className={style.info}>
                <h2 className={style.title}>Dmitry K.</h2>
                <span className={style.link}>Date of Birth: 2 Jaunary</span>
                <span className={style.link}>City: Minsk</span>
                <span className={style.link}>Education: BSU`11</span>
                <span className={style.link}>Web site: https://it-kamasutra.com</span>
            </div>
        </div>
        <MyPosts dataPosts={props.dataProfilePage.dataPosts} newPostText={props.dataProfilePage.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
    </div>);
}

export default Profile;