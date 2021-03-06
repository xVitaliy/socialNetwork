import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} />)

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <AddMessageForm onSubmit={addNewMessage} />
                <div className={s.messageWrapper}>{messagesElements}</div>
            </div>
        </div>
    )
}

export default Dialogs