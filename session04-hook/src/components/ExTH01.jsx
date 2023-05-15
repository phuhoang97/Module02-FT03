import React, { useState } from "react";

function ExTH01() {
  const [product, setProduct] = useState([
    { id: 1, name: "ngyen van a", age: 18 },
    { id: 2, name: "ngyen van b", age: 18 },
    { id: 3, name: "ngyen van c", age: 18 },
  ]);

  return (
    <div>
      ExTH01
      <ul>
        {product.map((item) => (
          <li>
            {item.id}-{item.name}-{item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExTH01;
