import React, { useState } from "react";

function ExTH04() {
  const [student, setSudent] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(student.name + student.email + student.phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type='text'
        value={student.name}
        name='name'
        onChange={handleChange}
      />
      <br />
      <label>Email:</label>
      <input
        type='text'
        value={student.email}
        name='email'
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <input
        type='text'
        value={student.phone}
        name='phone'
        onChange={handleChange}
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default ExTH04;
