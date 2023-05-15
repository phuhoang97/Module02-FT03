import React, { useReducer } from "react";

function DemoUseReducer() {
  // useReducer được cung cấp như 1 giải pháp thay thế cho useState
  // useState thường được sử dụng trong các dự án đơn giản
  // useReducer thường được sử dụng trong các dự án phức tạp

  // Ví dụ:
  // useState:
  // const [count, setCount] = useState(0)
  // initState: 0
  // action: setCount(count + 1) và setCount(count - 1)

  // useReducer:
  // initState: 0
  // action: setCount(count + 1) và setCount(count - 1)
  // Reducer
  // Dispatch

  // Bước 1: Khởi tạo giá trị ban đầu
  const initState = 0;

  // Bước 2: tạo Action
  const UP_ACTION = "UP";
  const DOWN_ACTION = "DOWN";
  const RANDOM = "RANDOM";
  // Bước 3: Reducer
  // Reducer nhận vào 2 tham số: 1 là state hiện tại, 2 là action
  const reducer = (state, action) => {
    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      case RANDOM:
        return (state += Math.floor(Math.random() * 10).toString());
      default:
        throw new Error("Invalid Action");
    }
  };

  // Bước 4: Dispatch
  // Dispatch sẽ thay thế cho setCount
  // useReducer có thể nhận vào 3 tham số:
  // tham số 1: là reducer
  // tham số 2: giá trị khởi tạo
  // initState là giá trị khởi tạo sẽ được gắn vào state (count)
  // Khi component được chạy sẽ chạy đến useReducer nhưng sẽ chưa chạy reducer

  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h2>useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(RANDOM)}>Random</button>
    </div>
  );
}

export default DemoUseReducer;
