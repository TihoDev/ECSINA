import React from "react";

function InputField({ title, value, id, className, type }) {
  return (
    <div>
      <label>
        <span></span>
        {}
      </label>
      <input type={type} placeholder="" />
    </div>
  );
}

export default InputField;
