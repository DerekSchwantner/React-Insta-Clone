import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  console.log(props.addLikes);
  return (
    <div className="Post">
      <header>
        <div className="Post-user">
          <div className="Post-user-avatar">
            <img src={props.post.thumbnailUrl} alt="thumbnail" />
          </div>
          <div className="Post-user-nickname">
            <span>{props.post.username}</span>
          </div>
        </div>
      </header>
      <div className="Post-image">
        <div className="Post-image-bg">
          <img src={props.post.imageUrl} alt="main" />
        </div>
      </div>

      <div className="likes">
        <button onClick={props.addLikes}>
          <i className="far fa-heart" />
        </button>
        <strong className="likes-count">{props.post.likes} likes</strong>
      </div>
      <div className="comment-section">
        <CommentSection comments={props.post.comments} />
      </div>
    </div>
  );
};

export default Post;
