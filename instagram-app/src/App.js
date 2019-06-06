import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
import withAuthenticate from "./components/authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

const App = () => <ComponentFromWithAuthenticate />;
export default App;
