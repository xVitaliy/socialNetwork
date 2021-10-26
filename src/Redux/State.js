// let posts = [
//     { id: 1, message: 'Hi, how are you?', likeCount: '15' },
//     { id: 2, message: 'It\'s my first post', likeCount: '11' },
//     { id: 3, message: 'Yo', likeCount: '1' },
//     { id: 4, message: 'Yo', likeCount: '22' },
// ]
//
// let dialogs = [
//     { id: 1, name: 'Vitaliy' },
//     { id: 2, name: 'Andrew' },
//     { id: 3, name: 'Sveta' },
//     { id: 4, name: 'Sasha' },
//     { id: 5, name: 'Stas' },
//     { id: 6, name: 'Valera' },
// ]
//
// let messages = [
//     { id: 1, message: 'Hi' },
//     { id: 2, message: 'How are you?' },
//     { id: 3, message: 'I\'m fine' },
//     { id: 4, message: 'Yo!' },
//     { id: 5, message: 'Yo!' },
//     { id: 6, message: 'Yo!' },
// ]

const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likeCount: '15' },
            { id: 2, message: 'It\'s my first post', likeCount: '11' },
            { id: 3, message: 'Yo', likeCount: '1' },
            { id: 4, message: 'Yo', likeCount: '22' },
        ],
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

}

export default state