import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://p4.wallpaperbetter.com/wallpaper/836/566/354/space-cosmo-hd-wallpaper-preview.jpg"
                     alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>

        </div>
    )
}

export default Profile