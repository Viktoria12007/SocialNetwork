import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    const createPost =  props.dataPosts.map(post => <Post message={post.message} like={post.like} />);
    
    const textArea = React.createRef();

    function createNewPost() {
    //  debugger;   
    // const newPost = textArea.current.value;
    props.addPost();
    // props.updateNewPostText('');
    // alert(newPost);
    }
    function changePost() {
        const text = textArea.current.value;
        props.updateNewPostText(text);  
    }

    return (
        <div className={style.myPosts}>
        <form className={style.form}>
        <textarea onChange={changePost} ref={textArea} value={props.newPostText}></textarea>
        <button type='button' onClick={ createNewPost }>Send</button>
        </form>
       {createPost}
        </div>
    );
}

export default MyPosts;