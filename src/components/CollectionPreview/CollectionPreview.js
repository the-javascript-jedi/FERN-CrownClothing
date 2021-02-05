import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => {
            return (
              <CollectionItem key={id} {...otherItemProps}></CollectionItem>
            );
          })}
      </div>
    </div>
  );
};
export default CollectionPreview;
