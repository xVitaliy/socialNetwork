import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likeCount: '15' },
        { id: 2, message: 'It\'s my first post', likeCount: '11' },
        { id: 3, message: 'Yo', likeCount: '1' },
        { id: 4, message: 'Yo', likeCount: '22' },
    ]

    let postsElements = posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/>)

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