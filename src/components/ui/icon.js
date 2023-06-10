import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const icon = (props) => {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      size="2x"
      color={props.color}
      style={{ paddingLeft: "20px" }}
      onClick={props.onClick}
    />
  );
};

export default icon;
