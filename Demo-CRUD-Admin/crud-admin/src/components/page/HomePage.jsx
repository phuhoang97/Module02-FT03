import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function HomePage() {
  // bật tắt nút xem
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [view, setView] = useState({});
  const handleShow = (id) => {
    setShow(true);
    axios
      .get(`http://localhost:7000/users/${id}`)
      .then((res) => setView(res.data));
  };

  // state dùng để lưu trữ dữ liệu từ api
  const [data, setData] = useState([]);
  // state check xóa phần tử user
  const [check, setCheck] = useState(true);

  // Hàm loadUser dùng để lấy dữ liệu từ api
  const loadUser = async () => {
    const result = await axios.get("http://localhost:7000/users");
    setData(result.data);
  };

  useEffect(() => {
    loadUser();
  }, [check]);
  const handleDelete = async (e) => {
    await axios.delete(`http://localhost:7000/users/${e}`);
    // cách 1:
    // loadUser();
    // cách 2:
    setCheck(!check);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Home Page</h2>

      {/* Table user */}
      <Table striped bordered hover style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{element.id}</td>
              <td>{element.username}</td>
              <td>{element.email}</td>
              <td>{element.age}</td>
              <td>{element.phone}</td>
              <td>
                <Button variant='info' onClick={() => handleShow(element.id)}>
                  <i className='fa-solid fa-eye'></i>
                </Button>
              </td>
              <td>
                <Link to={`/user/edit/${element.id}`}>
                  <Button variant='warning'>Edit</Button>
                </Link>
              </td>
              <td>
                <Button
                  variant='danger'
                  onClick={() => handleDelete(element.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>tài khoản user</Modal.Title>
        </Modal.Header>
        <Modal.Body>{view.username}</Modal.Body>
        <Modal.Body>{view.email}</Modal.Body>
        <Modal.Body>{view.age}</Modal.Body>
        <Modal.Body>{view.phone}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HomePage;
