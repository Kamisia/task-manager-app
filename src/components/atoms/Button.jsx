import React from "react";

const Button = ({ onClick, children, id, icon: Icon, dataTestId }) => {
  return (
    <button id={id} onClick={onClick} data-testid={dataTestId}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
