import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user-photo.png'
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelectedOn = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt={''} src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <input type={'file'} onChange={mainPhotoSelectedOn} />}

                {editMode
                    ? <ProfileDataForm profile={profile} />
                    : <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner} />}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

// компонент, который отвечает за реализацию нашей инфы
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My professionals skills</b>: {profile.lookingForAJob}
                </div>
            }

            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
            </div>
        </div>
    )
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div><b className={s.contact}>{contactTitle}</b>: {contactValue} </div>
}

export default ProfileInfo