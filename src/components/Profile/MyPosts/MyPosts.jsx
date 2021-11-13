import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import React from "react";
import { Field, reduxForm } from "redux-form";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount} />)
    let newPostElement = React.createRef()

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My Post </h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts