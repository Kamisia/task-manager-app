import React from "react";

const Input = ({ value, onChange, dataTestId }) => {
  return (
    <input
      data-testid={dataTestId}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
