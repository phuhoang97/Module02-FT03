import React, { useContext } from "react";
import { themeContext } from "./DemoUseContext";

function CompC() {
  //   console.log(props);
  const theme = useContext(themeContext);
  return (
    <div className={theme}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        placeat natus nihil quos explicabo. Cumque id et impedit eveniet
        laboriosam, beatae asperiores neque quos fugiat eligendi minus quae
        magni explicabo obcaecati. Aperiam rerum voluptatum officia quos id enim
        eligendi aut.
      </p>
    </div>
  );
}

export default CompC;
