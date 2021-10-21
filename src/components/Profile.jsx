import s from './Profile.module.css'

const Profile = ()=> {
    return (
        <div className={s.content}>
            <div>
                <img src="https://p4.wallpaperbetter.com/wallpaper/836/566/354/space-cosmo-hd-wallpaper-preview.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My Post
                <div>
                    New Post
                </div>
                <div>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile