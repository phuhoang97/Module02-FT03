import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    phone: "",
  });

  // Sử dụng cú pháp destructuring
  const { username, email, age, phone } = user;

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Sử dụng useParam để lấy id
  const { id } = useParams();

  // Lấy dữ liệu người dùng từ homepage
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:7000/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:7000/users/${id}`, user);
    navigate("/");
  };

  return (
    <div>
      <div className='w-75 mx-auto shadow p-5'>
        <h2>Update User</h2>
        <form onSubmit={handleUpdate}>
          <label>Username: </label>
          <input
            type='text'
            name='username'
            value={username}
            onInput={(e) => handleInput(e)}
          />
          <br />
          <label>Email: </label>
          <input
            type='text'
            name='email'
            value={email}
            onInput={(e) => handleInput(e)}
          />
          <br />
          <label>Age: </label>
          <input
            type='text'
            name='age'
            value={age}
            onInput={(e) => handleInput(e)}
          />
          <br />
          <label>Phone: </label>
          <input
            type='text'
            name='phone'
            value={phone}
            onInput={(e) => handleInput(e)}
          />
          <br />
          <Button variant='outline-success' type='submit'>
            Update
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
