import React from "react";

function HelpCard(props) {
  return (
    <div class="card">
      <h2 className="HelpTitle">{props.title}</h2>
      <div class="card-body">
        <img src={props.Image} alt={props.alt}></img>
      </div>
    </div>
  );
}
export default HelpCard;
