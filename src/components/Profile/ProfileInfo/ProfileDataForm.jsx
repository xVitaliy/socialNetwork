import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

// форма, которая будет менять ProfileData
const ProfileDataForm = ({ profile }) => {
    return (
        <form>
            <div>
                <button>save</button>
            </div>
            <div>
                <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>

            <div>
                <b>My professionals skills</b>:
                {createField('My professionals skills', 'lookingForAJobDescription', [], Textarea)}
            </div>

            <div>
                <b>About me</b>: {profile.aboutMe}
                {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            {/*<div>*/}
            {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm