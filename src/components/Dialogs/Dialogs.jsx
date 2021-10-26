import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { createRef } from "react";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    const newPostText = createRef()
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    <textarea ref={newPostText}></textarea>
                    <div>
                        <button onClick={() => alert(newPostText.current.value)}>add</button>
                    </div>
                </div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs