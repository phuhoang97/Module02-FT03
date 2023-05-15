import React, { useState } from "react";

function ExTH03() {
  const [filter1, setFilter1] = useState("");
  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Peter", age: 35 },
    { name: "Jane", age: 40 },
  ]);
  const array = data.filter((e) =>
    e.name.toLowerCase().includes(filter1.toLowerCase())
  );
  const handleChange = (e) => {
    setFilter1(e.target.value);
  };
  return (
    <div>
      <input type='text' onChange={handleChange} />
      {array.map((e, i) => {
        return (
          <div key={i}>
            <div>{e.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ExTH03;
