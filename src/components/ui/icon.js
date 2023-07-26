import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const icon = (props) => {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      size={props.size || "2xl"}
      color={props.color}
      onClick={props.onClick}
    />
  );
};

export default icon;
