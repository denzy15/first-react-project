import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";


const mapStateToProps = (state) =>{
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPost: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
