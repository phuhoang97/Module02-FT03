import React, { useEffect, useState } from "react";
// rfce

function DemoUseEffect() {
  //   const [text, setText] = useState("");
  //   const [count, setCount] = useState(0);

  // useEffect nhiệm vụ:
  // callAPI, listen DOM event, update DOM, clearUp

  // Cú pháp:
  // useEffect(callback)

  //   Có 2 loại chính:
  //   1. Không cần cleanUp
  //   2. có cleanUp

  //   Trường hợp 1:
  // Cú pháp: useEffect(callback)
  //   useEffect(() => {
  //     console.log("useEffect được chạy");
  //   });

  // Tính chất:
  // Callback luôn được gọi mỗi khi component mount
  // Gọi callback mỗi khi component re-render
  // Gọi callback ngay sau khi component được thêm vào DOM

  // Trường hợp 2:
  // cú pháp: useEffect(callback, [])
  //   useEffect(() => {
  //     console.log("useEffect được chạy");
  //   }, []);

  //   Tính chất
  // Callback luôn được gọi mỗi khi component mount
  // Chỉ gọi callback 1 lần khi component mount

  //   Trường hợp 3:
  //   cú pháp:
  //   useEffect(callback, [deps]); // dependencies

  // Tính chất:
  // Callback luôn được gọi mỗi khi component mount
  // Callback được gọi lại mỗi khi deps thay đổi

  //   useEffect(() => {
  //     console.log("useEffect được chạy");
  //   }, [count]);

  //   return (
  //     <div>
  //       <h2>useEffect</h2>
  //       <input type='text' onChange={(e) => setText(e.target.value)} />

  //       <p>{count}</p>
  //       <button onClick={() => setCount(count + 1)}>Up</button>
  //       <button onClick={() => setCount(count - 1)}>Down</button>
  //       {console.log("re-render")}
  //     </div>
  //   );
  // }

  // Ví dụ sử dụng để gọi api

  const [data, setData] = useState([]);

  // Gọi api post: https://jsonplaceholder.typicode.com/posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log("data ==>", data);

  return (
    <div>
      <h2>Demo Trường hợp 2</h2>

      <table border={1}>
        <tr>
          <th>STT</th>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
        </tr>

        {data.map((e, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.userId}</td>
            <td>{e.id}</td>
            <td>{e.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DemoUseEffect;
