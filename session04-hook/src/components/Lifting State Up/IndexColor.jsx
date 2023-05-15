import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  const [color, setColor] = useState("#000000");

  const handleChangeColor = (e) => {
    setColor(e);
  };

  return (
    <div>
      <ColorPicker changleColor={handleChangeColor} />
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          margin: "0 auto",
          marginTop: "100px",
        }}
      ></div>
    </div>
  );
}

export default IndexColor;
