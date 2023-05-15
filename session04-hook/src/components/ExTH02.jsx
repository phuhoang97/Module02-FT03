import React, { useState } from "react";

function ExTH02() {
  const [text, setText] = useState("");
  const [arrText, setArrText] = useState([]);
  const handleClick = () => {
    setArrText([...arrText, text]);
  };
  return (
    <div>
      <ul>
        {arrText.map((text, index) => (
          <li>{text}</li>
        ))}
      </ul>
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>an em di</button>
    </div>
  );
}

export default ExTH02;
