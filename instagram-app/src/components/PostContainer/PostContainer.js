import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./PostContainer.scss";
class PostContainer extends React.Component {
  render() {
    return (
      <div className="posts">
        {this.props.posts.map((post, i) => (
          <div key={i} className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src={post.thumbnailUrl} alt="thumbnail" />
                </div>
                <div className="Post-user-nickname">
                  <span>{post.username}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img src={post.imageUrl} alt="main" />
              </div>
            </div>

            <div className="img-container">
              <button>
                <i className="far fa-heart" />
              </button>
              <p className="">{post.likes} likes</p>
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
