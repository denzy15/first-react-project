import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let postsElem = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likes={p.likes} name={p.name} />
  ));
  let newPostElem = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElem.current.value;
    props.updateNewPost(text);
  };
  return (
    <div className={c.posts}>
      <textarea
        value={props.newPostText}
        ref={newPostElem}
        onChange={onPostChange}
        className={c.newPost}
      />
      <br />
      <button onClick={addPost} className={c.addPost}>
        Publish post
      </button>
      {postsElem}
    </div>
  );
};

export default MyPosts;
