import React, { useEffect, useState } from "react";

function DemoFetchAPI() {
  // Get Fetch API
  // Khi sử fetch api => promise (trạng thái đầu tiền luôn luôn là pending)
  // => nếu trả về dữ liệu sẽ trả về phần .then
  // => nếu trả về lỗi sẽ sẽ về phần .catch

  // Tạo state để lưu trữ data
  const [dataUser, setDataUser] = useState([]);
  //   const handleGetFetch = () => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) // Ép lại kiểu dữ liệu được trả về từ api
  //       .then((data) => setDataUser(data))
  //       .catch((err) => console.log(err));
  //   };

  // Cách 2: sử dụng useEffect
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json()) // Ép lại kiểu dữ liệu được trả về từ api
      .then((data) => setDataUser(data))
      .catch((err) => console.log(err));
  }, []);

  // Post Fetch API
  const people = {
    username: "Huy",
    email: "huy@gmail.com",
    age: 22,
    phone: "0322321352",
  };

  const handlePostFetch = async () => {
    await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(people),
    });
  };

  // Put Fetch API
  // Khi sử dụng put patch delete sẽ cần biết id của user => url/{id}
  // So sánh giữa PUT và PATCH
  // PUT: sẽ tạo ra 1 bản ghi mới => ghi đè lại bản ghi cũ

  const putFetch = {
    username: "Cuong",
    email: "cuong@gmail.com",
    age: 30,
    phone: "0334341352",
  };
  const handlePutFetch = () => {
    fetch("http://localhost:8000/users/3", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(putFetch),
    });
  };

  // Patch Fetch API
  // Patch giữ nguyên giá trị ban đầu => chỉ sửa trường được gửi lên từ body
  const patchFetch = {
    username: "Long",
    // email: "cuong@gmail.com",
    // age: 30,
    phone: "0334341352",
  };
  const handlePatchFetch = () => {
    fetch("http://localhost:8000/users/3", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(patchFetch),
    });
  };

  // Delete Fetch API
  const handleDeleteFetch = () => {
    fetch("http://localhost:8000/users/6", {
      method: "DELETE",
    });
  };

  return (
    <div>
      <h2>Demo Fetch API</h2>
      {/* Cách 1 - phần get api*/}
      {/* <button onClick={handleGetFetch}>Get Fetch API</button> */}
      {/* Cách 2 - phần get api*/}
      <button>Get Fetch API</button>
      <button onClick={handlePostFetch}>Post Fetch API</button>
      <button onClick={handlePutFetch}>Put Fetch API</button>
      <button onClick={handlePatchFetch}>Patch Fetch API</button>
      <button onClick={handleDeleteFetch}>Delete Fetch API</button>

      {/* Hiển thị danh sách user */}
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {dataUser.map((e, i) => (
            <tr key={i}>
              <th>{e.id}</th>
              <th>{e.username}</th>
              <th>{e.email}</th>
              <th>{e.age}</th>
              <th>{e.phone}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchAPI;
