import React, { useState } from "react";

function ExCL01() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Ban da click {count}</div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default ExCL01;
