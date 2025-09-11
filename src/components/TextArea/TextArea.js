import React, { useState } from "react";

function TextArea({ id, ...rest }) {
  const [value, setValue] = useState("");

  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...rest}
    />
  );
}

export default TextArea;
