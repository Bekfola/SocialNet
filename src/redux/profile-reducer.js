const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'Hi!', likesCount: 12},
    {id: 2, message: 'How are you', likesCount: 11},
    {id: 3, message: 'Fine', likesCount: 5},
    {id: 4, message: 'It\'s my first post', likesCount: 22}
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.newPostText};
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0
      };
      return {...state,
      posts: [...state.posts, newPost],
      newPostText: ''
      };
      // newState.posts = [...state.posts];
      // newState.posts.push(newPost);
      // newState.newPostText = '';
    case SET_USER_PROFILE:
      return {...state, profile: action.userId}
    
    default:
      return state;
  }

}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export const setUserProfile = (userId) => ({type: SET_USER_PROFILE, userId});
