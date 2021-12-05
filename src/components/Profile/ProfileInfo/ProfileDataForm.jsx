import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css'
import { reduxForm } from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import React from "react";

// форма, которая будет менять ProfileData
const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        // кнопка внутри формы по умолчанию засабмитит форму
        //вешаем обработчик события на форму
        <div className='redactForm'>
            <form onSubmit={handleSubmit}>
                <div>
                    <button className={style.formButton}>save</button>
                </div>
                {
                    error && <div className={style.formSummaryError}>
                        {error}
                    </div>
                }
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
                    <b>About me</b>:
                    {createField('About me', 'aboutMe', [], Textarea)}
                </div>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={s.contact}>
                            <b>{key}</b>: {createField(key, 'contacts.' + key, [], Input)}
                        </div>
                    )
                })}
                </div>
            </form>
        </div>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm