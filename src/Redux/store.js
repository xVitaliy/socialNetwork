import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMessageBody: '',
        },
        sidebar: {},

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

    dispatch(action) {
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likeCount: '0'
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._callSubscriber(this._state)
        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messages.push({ id: 6, message: body });
        //     this._callSubscriber(this._state);
        // }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }
}

export default store







