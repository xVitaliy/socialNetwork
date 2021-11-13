import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody
    

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)

    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <AddMessageFormRedux onSubmit={addNewMessage} />
                <div>{messagesElements}</div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name={'newMessageBody'} placeholder={'enter your message'} />
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs