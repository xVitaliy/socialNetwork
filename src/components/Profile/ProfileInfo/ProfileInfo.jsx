import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import { updateStatus } from "../../../Redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://p4.wallpaperbetter.com/wallpaper/836/566/354/space-cosmo-hd-wallpaper-preview.jpg"*/}
            {/*         alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo