import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            My Post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Posts message='Hi, how are you?' likeCount='15'/>
                <Posts message="It's my first post" likeCount='25'/>
            </div>
        </div>
    )
}

export default MyPosts