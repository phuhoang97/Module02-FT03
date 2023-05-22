import React, { useState } from "react";
import axios from "axios";

function DemoAxios() {
  // Axios là 1 thư viện của JS => được dùng để xử lý api tương đương như Fetch
  // Bước 1: npm install axios
  // Bước 2: import axios from "axios";
  // Bước 3

  // Get Axios
  const [dataUser, setDataUser] = useState([]);
  const handleGetAxios = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setDataUser(res.data));
  };

  console.log(dataUser);

  // Post Axios
  const handlePostAxios = () => {
    axios
      .post("http://localhost:8000/users", {
        username: "Nhung",
        email: "nhung@gmail.com",
        age: 27,
        phone: "0254654351",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Put Axios
  const handlePutAxios = () => {
    axios
      .put("http://localhost:8000/users/3", {
        username: "Hoang Anh",
        email: "hoanganh@gmail.com",
        age: 21,
        phone: "0854546451",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Patch Axios
  const handlePatchAxios = () => {
    axios
      .patch("http://localhost:8000/users/3", {
        username: "Hai",
        email: "hai@gmail.com",
        age: 25,
        phone: "0854878451",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Delete Axios
  const handleDeleteAxios = () => {
    axios
      .delete("http://localhost:8000/users/5")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Demo Axios</h2>
      <button onClick={handleGetAxios}>Get Axios</button>
      <button onClick={handlePostAxios}>Post Axios</button>
      <button onClick={handlePutAxios}>Put Axios</button>
      <button onClick={handlePatchAxios}>Patch Axios</button>
      <button onClick={handleDeleteAxios}>Delete Axios</button>
    </div>
  );
}

export default DemoAxios;
