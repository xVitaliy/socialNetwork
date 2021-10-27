import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/State";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/>)
    let newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3> My Post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts