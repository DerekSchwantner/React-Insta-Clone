import React from "react";
import "./SearchBar.scss";

class SearchBar extends React.Component {
  logout = e => {
    e.preventDefault();
    localStorage.removeItem("User");
    window.location.reload();
  };

  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
              Instagram
            </a>
          </div>
          <input
            name="search"
            type="text"
            onChange={this.props.searchFilter}
            className="input"
            placeholder="Search..."
          />
          <button className="logout-btn" onClick={this.logout}>
            Logout
          </button>
        </div>
      </nav>
    );
  }
}
export default SearchBar;
