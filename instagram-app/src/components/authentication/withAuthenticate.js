import React from "react";

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (JSON.parse(localStorage.getItem("user"))) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    }
    render() {
      if (localStorage.getItem("User")) {
        return <PostsPage />;
      } else {
        return <Login />;
      }
    }
  };
export default withAuthenticate;
