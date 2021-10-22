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
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
            </div>
        </div>
    )
}

export default MyPosts