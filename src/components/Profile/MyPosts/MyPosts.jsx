import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3> My Post </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts