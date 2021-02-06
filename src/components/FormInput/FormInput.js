import React from "react";
import "./form-input.styles.scss";
// ...otherProps will be all the props we are passing in name,type,value,required
function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {/* with label prop we selectively render label; */}
      {label ? (
        //   we add className shrink whenever user has typed anything to corresponding input
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
export default FormInput;
