const UPDATE_NEW_MESAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

const initialState = {
      dialogs: [
        { name: "Roma", id: 1 },
        { name: "Vitya", id: 2 },
        { name: "Zheka", id: 3 },
        { name: "KHACH", id: 4 },
      ],
      messages: [
        { message: "lol", id: 1 },
        { message: "kek", id: 2 },
        { message: "cheburek", id: 3 },
        { message: "wassup??", id: 4 },
      ],
      newMessageText: ''
    }

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      let messageItem = {
        id: 1,
        message: state.newMessageText,
      };
      return  {
        ...state,
        newMessageText: '',
        messages: [...state.messages, messageItem]
      }
    case UPDATE_NEW_MESAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage
      }
    default:
      return state;
  }
};

export const sendNewMessageCreator = () => ({ type: SEND_NEW_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESAGE_TEXT,
  newMessage: text,
});

export default dialogsReducer;
