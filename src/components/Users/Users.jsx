import styles from './Users.module.css'

const Users = (props) => {
    
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png',
                followed: false,
                fullName: 'Vitaliy',
                status: 'I am a boss',
                location: { city: 'Alchevsk', country: 'Ukraine' }
            },
            {
                id: 2,
                photoUrl: 'https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png',
                followed: true,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 3,
                photoUrl: 'https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss',
                location: { city: 'Kiev', country: 'Ukraine' }
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users