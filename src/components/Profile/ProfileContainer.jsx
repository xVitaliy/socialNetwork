import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, savePhoto, updateStatus } from "../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";

import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

//todo withAuthRedirect str:44 and str:16