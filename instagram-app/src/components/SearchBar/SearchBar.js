import React from "react";
import "./SearchBar.scss";
// const SearchBar = props => {
//   return (
//     <div className="search-bar">
//
//     </div>
//   );
// };

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
          <input type="text" className="input" placeholder="Search..." />
        </div>
      </nav>
    );
  }
}
export default SearchBar;
