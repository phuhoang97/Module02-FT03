import React, { useEffect, useMemo, useRef, useState } from "react";

// memo là 1 hof
// useMemo là 1 hook

let nameRef;

function DemoUseMeMo() {
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [products, setProducts] = useState([]);

  // Focus
  const [focus, setFocus] = useState(false);

  const handleAdd = () => {
    setProducts([
      ...products,
      {
        nameProduct,
        priceProduct: +priceProduct,
      },
    ]);
    setNameProduct("");
    setPriceProduct("");
    setFocus(true); // set focus thành true khi button được click
    // nameRef.current.focus();
  };

  //   const total = products.reduce((result, prod) => {
  //   console.log("Tính toán lại ...");
  //   result + prod.price, 0;
  // };

  useEffect(() => {
    // đặt trỏ chuột vào phần tử input khi focus có giá trị là true
    if (focus) {
      document.getElementById("nameProductInput").focus();
      setFocus(false); // reset focus thành false sau khi đặt trỏ chuột vào phần tử input
    }
  }, [focus]);

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Tính toán lại ...");
      console.log(prod);
      return result + prod.priceProduct;
    }, 0);
    return result;
  }, [products]);
  return (
    <div>
      <h2>Demo useMemo</h2>
      <input
        ref={nameRef}
        id='nameProductInput'
        type='text'
        placeholder='Enter name ...'
        value={nameProduct}
        onChange={(e) => setNameProduct(e.target.value)}
      />
      <br />
      <input
        type='text'
        placeholder='Enter price ...'
        value={priceProduct}
        onChange={(e) => setPriceProduct(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <br />
      <h2>Total: {total}</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.nameProduct} - {product.priceProduct}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoUseMeMo;
