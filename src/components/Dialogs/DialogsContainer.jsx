import Dialogs from "./Dialogs";
import { sendNewMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
    sendNewMessage: () => {
      dispatch(sendNewMessageCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); 

export default DialogsContainer;
