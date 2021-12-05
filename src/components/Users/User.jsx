import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user-photo.png";
import React from "react";
import { NavLink } from "react-router-dom";


const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={styles.userCard}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt={''} className={styles.userPhoto}
                             src={user.photos.small !== null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div className={styles.follow}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id);
                                  }}>UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>Follow</button>}
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>

            </div>
        </div>
    )
}

export default User

// check str 15, ternary operator ?:
