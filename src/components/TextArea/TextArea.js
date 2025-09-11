import React from "react";

function TextArea({ id, value, onChange, ...rest }) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  );
}

export default TextArea;
