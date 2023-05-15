import React, { useState } from "react";

function ExTH05() {
  const [Fahrenheit, setFahrenheit] = useState("");
  const [Celsius, setCelsius] = useState("");

  const handleChangeFahrenheit = (e) => {
    setFahrenheit(e.target.value);
    setCelsius(((e.target.value - 32) * 5) / 9);
  };

  const handleChangeCelsius = (e) => {
    setCelsius(e.target.value);
    setFahrenheit((e.target.value * 9) / 5 + 32);
  };

  return (
    <div>
      <div>
        <label>Fahrenheit</label>
        <input
          type='number'
          value={Fahrenheit}
          onChange={handleChangeFahrenheit}
        ></input>
      </div>
      <div>
        <label>Celsius</label>
        <input
          type='number'
          value={Celsius}
          onChange={handleChangeCelsius}
        ></input>
      </div>
    </div>
  );
}

export default ExTH05;
