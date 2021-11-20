import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       onPageChanged={onPageChanged}
            />
            <div>
                {
                    users.map(u => <User
                            user={u} key={u.id}
                            followingInProgress={props.followingInProgress}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />
                    )
                }
            </div>
        </div>
    )
}
// todo  check str 15, ternary operator ?:
export default Users
