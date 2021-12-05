let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 15 },
        { id: 2, message: 'It\'s my first post', likeCount: 11 },
        { id: 3, message: 'Yo', likeCount: 1 },
        { id: 4, message: 'Yo', likeCount: 22 },
    ],
    profile: null,
    status: '',
}

let obj2 = { ...state, posts: [...state.posts] }

console.log(obj2)
console.log(state.posts[0].likeCount += 1)
console.log(state)

