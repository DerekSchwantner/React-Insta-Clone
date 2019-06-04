import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

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

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.array
    })
  )
};

export default PostContainer;
