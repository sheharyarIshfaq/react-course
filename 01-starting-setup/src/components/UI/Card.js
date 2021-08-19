import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

//   return React.createElement("div", { className: classes }, props.children);

    return <div className={classes}>{props.children}</div>;
};
export default Card;
