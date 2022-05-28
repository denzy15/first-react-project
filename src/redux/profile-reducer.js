const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPostItem = {
        message: state.newPostText,
        likes: 0,
        name: "Daniil M",
        id: 1,
      };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPostItem],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
