import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {

      posts: [
        {id: 1, message: 'Hi!', likesCount: 12},
        {id: 1, message: 'How are you', likesCount: 11},
        {id: 1, message: 'Fine', likesCount: 5},
        {id: 1, message: 'It&#39;s my first post', likesCount: 22}
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'}
      ],
      messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'ai!'},
        {id: 5, message: 'fu!'}
      ],
      newMessageText: ''
    },
    sidebar: {}
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  _updateNewPostText(newPostText) {
    this._state.profilePage.newPostText = newPostText;
    this._callSubscriber(this._state)
  },



  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }

}




window.store = store;

export default store;
