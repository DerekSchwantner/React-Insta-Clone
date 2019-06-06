import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer.js";
import SearchBar from "../SearchBar/SearchBar.js";

import "../../App.scss";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: "",
      filteredPosts: [],
      likes: dummyData.likes
    };
  }
  searchFilter = e => {
    e.preventDefault();
    const filtered = this.state.data.filter(post => {
      return (
        post.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
        post.likes.toString().includes(e.target.value.toString())
      );
    });
    this.setState({ filteredPosts: filtered });
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addLikes = e => {
    e.preventDefault();
    this.setState({
      likes: this.state.likes + 1
    });
  };

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
        <SearchBar
          searchFilter={this.searchFilter}
          newSearch={this.state.search}
          changeHandler={this.changeHandler}
        />

        {
          <PostContainer
            addLikes={this.addLikes}
            posts={this.state.data}
            filteredPosts={this.state.filteredPosts}
            searchFilter={this.searchFilter}
          />
        }
      </div>
    );
  }
}

export default PostsPage;
