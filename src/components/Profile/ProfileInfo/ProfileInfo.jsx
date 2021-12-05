import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user-photo.png'
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelectedOn = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.imgForm}>

                    <img alt={''} src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                    <div className={s.btnWrapper}>change photo
                        {isOwner &&
                            <input className={s.btn} type={'file'} onChange={mainPhotoSelectedOn} />}
                    </div>
                </div>
                <div>
                    <div className={s.status}><ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                    </div>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner} />}
                </div>


            </div>
            <div className={s.line}>

            </div>
        </div>
    )
}

// компонент, который отвечает за реализацию нашей инфы
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div className={s.userInfo}>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit form</button>
            </div>}
            <div className={s.itemInfo}>
                <span>Full name:</span> {profile.fullName}
            </div>
            <div className={s.itemInfo}>
                <span>Looking for a job:</span> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {
                profile.lookingForAJob &&
                <div className={s.itemInfo}>
                    <span>My professionals skills:</span> {profile.lookingForAJobDescription}
                </div>
            }

            <div className={s.itemInfo}>
                <span>About me:</span> {profile.aboutMe}
            </div>
            <div className={s.itemInfo}>
                <span>Contacts:</span> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
            </div>
        </div>
    )
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contactWrapper}><span className={s.contact}>{contactTitle}</span>: {contactValue} </div>
}

export default ProfileInfo