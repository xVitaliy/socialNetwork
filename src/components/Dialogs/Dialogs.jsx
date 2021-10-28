import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (event) => {
        props.store.dispatch(updateNewMessageBodyCreator(event.target.value))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder={'enter your message'}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>add
                        </button>
                    </div>
                </div>
                <div>{messagesElements}</div>
            </div>
        </div>
    )
}

export default Dialogs