import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
  auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
