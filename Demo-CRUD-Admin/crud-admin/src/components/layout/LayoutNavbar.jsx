import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function LayoutNavbar({ handleChangeSearch }) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active' aria-current='page'>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-link active'
                  aria-current='page'
                >
                  About
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-link active'
                  aria-current='page'
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link to={"/user/add"} style={{ marginRight: "50px" }}>
              <Button variant='outline-success'>Add User</Button>
            </Link>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                onChange={handleChangeSearch}
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LayoutNavbar;
