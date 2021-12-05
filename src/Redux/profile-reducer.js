import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const INC_LIKE_COUNT = 'INC_LIKE_COUNT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 15 },
        { id: 2, message: 'It\'s my first post', likeCount: 11 },
        { id: 3, message: 'Yo', likeCount: 1 },
        { id: 4, message: 'Yo', likeCount: 22 },
    ],
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_LIKE_COUNT: {
            return {
                ...state, posts: state.posts.map(p => {
                    return p.id === action.id ? { ...p, likeCount: p.likeCount + 1 } : p
                })
            }
        }
        case ADD_POST: {
            let newPost = {
                id: Date.now().toLocaleString(),
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        default:
            return state
    }
}

export default profileReducer

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const incrementLikeCount = (id) => ({ type: INC_LIKE_COUNT, id })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        // если мы здесь закейтчили ошибку, то в глобальный обработчик она уже не попадет
        console.error(e)
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        // общая ошибка для всей формы
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

