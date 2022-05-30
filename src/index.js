import React from "react";

// This is a stateless component as it is just taking a read only property and not maintaining any state of anything
function item(props) {
  return <li onClick={() => props.delete(props.id)}>{props.item}</li>;
}

export default item;
