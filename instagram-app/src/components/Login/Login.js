import React from "react";
import "../Login/Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    localStorage.setItem("User", this.state.username);
    window.location.reload();
  };

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("User");
    window.location.reload();
  };

  render() {
    return (
      <div className="login-container">
        <h1 className="login-title">Instagram</h1>
        <form>
          <label>Username</label>
          <input
            name="username"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter your username"
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="Enter password"
          />
          <button onClick={this.login} type="submit">
            Login
          </button>
          <button onClick={this.logout} type="submit">
            Logout
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
