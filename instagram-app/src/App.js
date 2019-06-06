import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from "./components/Login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

const App = () => <ComponentFromWithAuthenticate />;
export default App;
