import React from "react";

function ColorPicker(props) {
  console.log(props);
  const handlePickerColor = (e) => {
    props.changleColor(e.target.value);
  };
  return (
    <div>
      <input type='color' onChange={handlePickerColor} />
    </div>
  );
}

export default ColorPicker;
