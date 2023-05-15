// rfce

import React, { useState } from "react";

function DemoUseState() {
  //   const [state, setState] = useState("hello world");
  //   console.log(state);
  // trong class: this.state = {count: 10}
  // Trong useState:
  // state: Sẽ nhận giá trị khởi tạo ban đầu
  // setState: Là 1 hàm (fn) dùng để set lại giá trị state
  // useState(initialState): initialState là giá trị khởi tạo

  // Kiểu dữ liệu
  // Kiểu dữ liệu nguyên thủy:
  // Number
  const [count, setCount] = useState(0);
  // String
  const [text, setText] = useState("Hello");

  const handleChange = () => {
    setText("Hiếu Cà Mau => máy dập");
  };

  // Kiểu dữ liệu phức tạp
  // Array

  const [arrNum, setArrNum] = useState([1, 2, 3, 4]);

  const handleAddRandom = () => {
    setArrNum([...arrNum, Math.floor(Math.random() * 10)]);
  };

  // Object

  const [objList, setObjList] = useState({ countObj: 10, arrList: [3, 5, 7] });
  console.log(objList);

  const handleAddObj = () => {
    setObjList({
      countObj: objList.countObj,
      arrList: [...objList.arrList, Math.floor(Math.random() * 10)],
    });
  };

  return (
    <div>
      <h4>Kiểu dữ liệu object</h4>
      <p>{objList.countObj}</p>
      <button
        onClick={() =>
          setObjList({
            countObj: objList.countObj + 1,
            arrList: objList.arrList,
          })
        }
      >
        Up
      </button>
      <button
        onClick={() =>
          setObjList({
            countObj: objList.countObj - 1,
            arrList: objList.arrList,
          })
        }
      >
        Down
      </button>

      <p>{objList.arrList.toString()}</p>
      <button onClick={handleAddObj}>Add Random</button>
    </div>
  );
}

export default DemoUseState;
