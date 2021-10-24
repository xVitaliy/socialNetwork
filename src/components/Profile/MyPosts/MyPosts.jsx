import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Hi, how are you?', likeCount: '15' },
        { id: 2, message: 'It\'s my first post', likeCount: '11' },
    ]

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
                {/*<Posts message='Hi, how are you?' likeCount='15'/>*/}
                {/*<Posts message="It's my first post" likeCount='25'/>*/}
                {postsData.map(post => <Posts message={post.message} likeCount={post.likeCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts