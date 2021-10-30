import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'
import React, { Component } from "react";

// arrayUsers([
//     {
//         id: 1,
//         photoUrl: 'https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png',
//         followed: false,
//         fullName: 'Vitaliy',
//         status: 'I am a boss',
//         location: { city: 'Alchevsk', country: 'Ukraine' }
//     },
//     {
//         id: 2,
//         photoUrl: 'https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png',
//         followed: true,
//         fullName: 'Dmitry',
//         status: 'I am a boss',
//         location: { city: 'Minsk', country: 'Belarus' }
//     },
//     {
//         id: 3,
//         photoUrl: 'https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png',
//         followed: false,
//         fullName: 'Andrew',
//         status: 'I am a boss',
//         location: { city: 'Kiev', country: 'Ukraine' }
//     },
// ])

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto}
                                 src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}


export default Users