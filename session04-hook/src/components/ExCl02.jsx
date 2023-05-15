import React, { useState } from "react";

function ExCl02() {
  const [text, setText] = useState("");

  const handlechange = (e) => {
    setText(e.target.value);
  };

  const test = "hello world";
  console.log(test.length);

  return (
    <div>
      <textarea value={text} onChange={handlechange}></textarea>
      <p>So ky tu:{text.length}</p>
    </div>
  );
}

export default ExCl02;
