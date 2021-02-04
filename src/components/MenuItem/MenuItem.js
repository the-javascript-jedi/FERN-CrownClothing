import React from "react";
import "./menu-item.styles.scss";
// withRouter-higher order component that takes a component and returns a modified component
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    // dynamically add a className large to the div through the size expression
    <div
      className={`${size} menu-item`}
      // ${match.url} gets the current url
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
// withRouter provides access to location, match and history in props
