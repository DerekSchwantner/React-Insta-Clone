import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.scss";

export class Post extends React.Component {
  render() {
    return this.props.posts.map((post, i) => {
      return (
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

          <div className="likes">
            <button>
              <i className="far fa-heart" />
            </button>
            <strong className="likes-count">{post.likes} likes</strong>
          </div>
          <div className="comment-section">
            <CommentSection comments={post.comments} />
          </div>
        </div>
      );
    });
  }
}

export class FilteredPost extends React.Component {
  render() {
    return this.props.filteredPosts.map((post, i) => {
      return (
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

          <div className="likes">
            <button>
              <i className="far fa-heart" />
            </button>
            <strong className="likes-count">{post.likes} likes</strong>
          </div>
          <div className="comment-section">
            <CommentSection comments={post.comments} />
          </div>
        </div>
      );
    });
  }
}
