import React from "react";
import "./App.scss";
import dummyData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: "",
      filteredPosts: []
    };
  }
  searchFilter = e => {
    e.preventDefault();
    const filtered = this.state.data.filter(post => {
      return post.username.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({ filteredPosts: filtered });
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
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
        <PostContainer
          posts={this.state.data}
          filteredPosts={this.state.filteredPosts}
          searchFilter={this.searchFilter}
        />
      </div>
    );
  }
}

export default App;
