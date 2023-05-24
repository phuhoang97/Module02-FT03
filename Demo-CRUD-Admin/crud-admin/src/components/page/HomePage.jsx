import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";

function HomePage({ search }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [view, setView] = useState({});
  const handleShow = (id) => {
    setShow(true);
    axios
      .get(`http://localhost:7000/users/${id}`)
      .then((res) => setView(res.data));
  };

  const [data, setData] = useState([]);
  const [check, setCheck] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  // Phần phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const loadUser = async () => {
    let url = `http://localhost:7000/users`;

    if (searchInput) {
      url += `?q=${searchInput}`;
    } else {
      if (sortType === "asc") {
        url += `?_sort=age&_order=asc`;
      } else {
        url += `?_sort=age&_order=desc`;
      }
    }

    const countResponse = await axios.get(
      `${url}&_page=1&_limit=1&_count=true`
    );

    const totalCount = countResponse.headers["x-total-count"];
    const totalPages = Math.ceil(totalCount / perPage);

    // Update the state with the retrieved data and totalPages
    const result = await axios.get(
      `${url}&_page=${currentPage}&_limit=${perPage}`
    );
    setData(result.data);
    setTotalPages(totalPages);
  };

  const handleDelete = async (e) => {
    await axios.delete(`http://localhost:7000/users/${e}`);
    setCheck(!check);
  };

  const [sortType, setSortType] = useState("asc");

  const handleSort = () => {
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    loadUser();
  }, [check, searchInput, sortType, currentPage, perPage]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Home Page</h2>

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

      <Table striped bordered hover style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th onClick={handleSort}>
              Age <i className='fa-solid fa-sort'></i>
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

      <Pagination>
        <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {paginationItems}
        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>

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
