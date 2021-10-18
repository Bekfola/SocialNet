const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}



const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: 
      return {...state,
        newMessageText: action.newMessageText
      };
      // newState.newMessageText = action.newMessageText;

    
    case SEND_MESSAGE: 
      let newMessage = {
        id: 6,
        message: state.newMessageText
      }
      return {...state, 
        newMessateText: '',
        messagesData: [...state.messagesData, newMessage]};
      // newState.messagesData.push(newMessage);
      // newState.newMessageText = '';

    
    default:
      return state;
  }
};


export default dialogsReducer;


export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});
