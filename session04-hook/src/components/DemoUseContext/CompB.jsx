import React from "react";
import CompC from "./CompC";

function CompB(props) {
  return (
    <div>
      <CompC themeCompC={props.themeProps} />
    </div>
  );
}

export default CompB;
