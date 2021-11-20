import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: '15' },
        { id: 2, message: 'It\'s my first post', likeCount: '11' },
        { id: 3, message: 'Yo', likeCount: '1' },
        { id: 4, message: 'Yo', likeCount: '22' },
    ]
}

it('length of posts should be increment', () => {
    let action = addPostActionCreator('Vitaliy');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
})

it('message of new post should be correct', () => {
    let action = addPostActionCreator('Vitaliy');
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe('Vitaliy')
})


it('after deleting length of message should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3)
})

it('after deleting shouldn\'t be decrement if id incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4)
})