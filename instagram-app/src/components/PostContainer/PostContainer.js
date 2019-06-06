import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.scss";
import Post from "./Post";
class PostContainer extends React.Component {
  render() {
    return (
      <div className="posts">
        {this.props.filteredPosts.length === 0
          ? this.props.posts.map((post, i) => {
              return (
                <Post addLikes={this.props.addLikes} key={i} post={post} />
              );
            })
          : this.props.filteredPosts.map((post, i) => {
              return (
                <Post addLikes={this.props.addLikes} key={i} post={post} />
              );
            })}
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
