import React from "react";
import "./SearchBar.scss";

class SearchBar extends React.Component {
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
            // value={this.props.newSearch}
            placeholder="Search..."
          />
        </div>
      </nav>
    );
  }
}
export default SearchBar;
