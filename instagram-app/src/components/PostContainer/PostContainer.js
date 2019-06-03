import React from "react";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {
  render() {
    return (
      <div className="posts">
        {this.props.posts.map((post, i) => (
          <div key={i}>
            <div className="top-bar">
              <img src={post.thumbnailUrl} alt="thumbnail" />
              <h2 className="">{post.username}</h2>
            </div>
            <div className="img-container">
              <img src={post.imageUrl} alt="main" />
            </div>
            <div className="comment-section">
              <CommentSection comments={post.comments} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostContainer;
