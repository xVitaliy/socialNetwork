import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: '15' },
        { id: 2, message: 'It\'s my first post', likeCount: '11' },
        { id: 3, message: 'Yo', likeCount: '1' },
        { id: 4, message: 'Yo', likeCount: '22' },
    ],
    newPostText: 'my first project',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: Date.now(), message: state.newPostText, likeCount: '0' }],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state
    }


}

export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

