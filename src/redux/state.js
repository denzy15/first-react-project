import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
  _callSubscriber() {
    console.log("State changed");
  },
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      posts: [
        { message: "I'm learning React!!!", likes: 5, name: "Daniil M", id: 1 },
        { message: "Exams soon :(", likes: 35, name: "Yevgeniy T", id: 2 },
        {
          message: "AND HIS NAME IS JOOHN CEENAAAAA",
          likes: 105,
          name: "Roman E",
          id: 4,
        },
        { message: "I love Alina <3", likes: 99999, name: "Daniil M", id: 4 },
      ],
      newPostText: "KAK DELA??",
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state);
  },
};

export default store;
