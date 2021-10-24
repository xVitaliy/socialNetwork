import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Vitaliy' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Stas' },
        { id: 6, name: 'Valera' },
    ]
    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I\'m fine' },
        { id: 4, message: 'Yo!' },
        { id: 5, message: 'Yo!' },
        { id: 6, message: 'Yo!' },
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsData.map(dialog => {
                    return <DialogItem id={dialog.id} name={dialog.name}/>
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map(message => {
                    return <Message message={message.message}/>
                })}
            </div>
        </div>
    )
}

export default Dialogs