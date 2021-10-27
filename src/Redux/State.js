const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeCount: '15' },
                { id: 2, message: 'It\'s my first post', likeCount: '11' },
                { id: 3, message: 'Yo', likeCount: '1' },
                { id: 4, message: 'Yo', likeCount: '22' },
            ],
            newPostText: 'my first project'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Vitaliy' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Stas' },
                { id: 6, name: 'Valera' },
            ],

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'I\'m fine' },
                { id: 4, message: 'Yo!' },
                { id: 5, message: 'Yo!' },
                { id: 6, message: 'Yo!' },
            ],
        }

    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },

//todo observer(паттерн наблюдатель) publisher-subscriber
    subscribe(observer) {
        this._callSubscriber = observer
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: '0'
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: '0'
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store
window.store = store

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })



