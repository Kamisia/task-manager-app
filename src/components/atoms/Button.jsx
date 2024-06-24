import React from "react";

const Button = ({ onClick, children, id, icon: Icon }) => {
  return (
    <button id={id} onClick={onClick}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
