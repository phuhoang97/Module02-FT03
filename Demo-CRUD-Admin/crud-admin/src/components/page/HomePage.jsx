import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function HomePage({ search }) {
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
  // Cách 1
  // const loadUser = async () => {
  //   const result = await axios.get(
  //     `http://localhost:7000/users?username_like=${search}`
  //   );
  //   setData(result.data);
  // };

  const handleDelete = async (e) => {
    await axios.delete(`http://localhost:7000/users/${e}`);
    // cách 1:
    // loadUser();
    // cách 2:
    setCheck(!check);
  };

  // useEffect(() => {
  //   loadUser();
  // }, [check]);

  // Search
  const [searchInput, setSearchInput] = useState("");
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const loadUser = async () => {
    let url = `http://localhost:7000/users`;

    // http://localhost:7000/users?q=${searchInput}
    if (searchInput) {
      url += `?q=${searchInput}`;
    }

    // logic sort
    if (sortType === "asc") {
      url += `?_sort=age&_order=asc`;
    } else {
      url += `?_sort=age&_order=desc`;
    }

    const result = await axios.get(url);
    setData(result.data);
  };

  // Sort
  // asc => tăng dần
  // desc => giảm dần
  const [sortType, setSortType] = useState("asc");

  const handleSort = () => {
    sortType === "asc" ? setSortType("desc") : setSortType("asc");
  };

  useEffect(() => {
    loadUser();
  }, [check, searchInput, sortType]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Home Page</h2>

      {/* Search */}
      <div className='w-25 d-flex' role='search'>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={searchInput}
          onChange={handleChangeInput}
        />
        <button
          className='btn btn-outline-success'
          type='submit'
          onClick={loadUser}
        >
          Search
        </button>
      </div>
      {/* Table user */}
      <Table striped bordered hover style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th onClick={handleSort}>
              Age <i class='fa-solid fa-sort'></i>
            </th>
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
