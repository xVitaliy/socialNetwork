import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://p4.wallpaperbetter.com/wallpaper/836/566/354/space-cosmo-hd-wallpaper-preview.jpg"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo