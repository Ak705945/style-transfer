import React from "react";

function Button(props) {
  return (
    <div className="Button">
      <span className="span">{props.name}</span>
    </div>
  );
}
export default Button;
