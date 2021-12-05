import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

//todo class Component

// class MyPosts extends PureComponent {
//
//     // shouldComponentUpdate(nextProps, nextState, nextContext) {
//     //     return nextProps !== this.props || nextState !== this.state
//     // }
//
//     render() {
//         let postsElements = this.props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount} />)
//         // let newPostElement = React.createRef()
//
//         const onAddPost = (values) => {
//             this.props.addPost(values.newPostText);
//         }
//
//         return (
//             <div className={s.postsBlock}>
//                 <h3> My Post </h3>
//                 <AddNewPostFormRedux onSubmit={onAddPost} />
//                 <div className={s.posts}>
//                     {postsElements}
//                 </div>
//             </div>
//         )
//     }
// }

const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(p => <Posts key={p.id} message={p.message} likeCount={p.likeCount} id={p.id} />)

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My Posts </h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={'myPostsField'}>
                <Field component={Textarea} name={'newPostText'}
                       placeholder={'Post message'}
                />
            </div>
            <div className={s.buttonWrapper}>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts