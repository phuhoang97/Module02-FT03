import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    phone: "",
  });

  // Sử dụng navigate để chuyển trang
  const navigate = useNavigate();

  // Sử dụng cú pháp destructuring
  const { username, email, age, phone } = user;

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:7000/users", user);
    navigate("/");
  };

  return (
    <div>
      <div className='w-75 mx-auto shadow p-5'>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
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
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
