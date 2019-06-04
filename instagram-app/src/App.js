import React from "react";
import "./App.scss";
import dummyData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
