import c from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog'
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElem = props.dialogsPage.dialogs.map((d) => (
    <Dialog name={d.name} key={d.id} />
  ));
  let messagesElem = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));
  
  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessage(text);
  };

  let onNewMessageSend = () => {
    props.sendNewMessage();
  };
  return (
    <div className={c.dialogsWrapper}>
      <div className={c.dialogs}>{dialogsElem}</div>
      <div className={c.messages}>
        {messagesElem}
        <div className={c.newMessage}>
          <textarea
            value={props.dialogsPage.newMessageText}
            placeholder="Enter your message"
            onChange={onNewMessageChange}
          ></textarea>
          <button className={c.send} onClick={onNewMessageSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
