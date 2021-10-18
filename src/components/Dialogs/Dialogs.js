import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageTextCreator, sendMessageCreator} from '../../redux/dialogs-reducer';



const Dialogs = (props) => {

  let state = props.dialogsReducer;

  let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id} />);

  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (ev) => {
    let text = ev.target.value;
    props.updateNewMessageText(text);
    // props.store.dispatch(updateNewMessageTextCreator(text));
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>
          {messagesElements}
        </div>
        <div>
          <div>
            <textarea
              value={newMessageText}
              onChange={onNewMessageChange}
              placeholder='enter your message'
            >
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )




  // return (
  //   <div className={s.dialogs}>
  //     <div className={s.dialogsItems}>
  //       {props.state.dialogsData.map(d => {
  //         return (
  //           <DialogItem name={d.name} id={d.id} />
  //         )
  //       })}
  //     </div>
  //
  //     <div className={s.messages}>
  //       {props.state.messagesData.map(m => {
  //         return (
  //           <Message message={m.message} />
  //         )
  //       })}
  //     </div>
  //   </div>
  // )
}

export default Dialogs;
