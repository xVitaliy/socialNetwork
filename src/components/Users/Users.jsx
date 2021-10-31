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

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && styles.selectedPage}
                                     onClick={(e) => {
                                         this.onPageChanged(p)
                                     }}> {p}</span>
                    })}
                </div>
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