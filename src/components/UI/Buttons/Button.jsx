import React from "react";

const Button = ({ children, additionalClassNames, ...props }) => {
  const totalClassNames = ["btn", "btn-success", ...additionalClassNames].join(
    " "
  );
  return (
    <button className={totalClassNames} {...props}>
      {children}
    </button>
  );
};
export default Button;
