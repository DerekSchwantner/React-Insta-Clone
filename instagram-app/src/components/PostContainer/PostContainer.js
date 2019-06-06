import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.scss";
import { Post } from "./Post.js";
import { FilteredPost } from "./Post.js";

class PostContainer extends React.Component {
  render() {
    return (
      <div className="posts">
        {this.props.filteredPosts.length === 0}?{" "}
        <Post
          posts={this.props.posts}
          filteredPosts={this.props.filteredPosts}
          searchFilter={this.searchFilter}
        />
        :
        <FilteredPost
          posts={this.props.posts}
          filteredPosts={this.props.filteredPosts}
          searchFilter={this.searchFilter}
        />
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
