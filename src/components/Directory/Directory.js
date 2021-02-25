import React from "react";
import "./directory.styles.scss";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}></MenuItem>
      ))}
      {/* 
        we can spread the other prosps because both have the same name
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
          ></MenuItem>
        ))} */}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
