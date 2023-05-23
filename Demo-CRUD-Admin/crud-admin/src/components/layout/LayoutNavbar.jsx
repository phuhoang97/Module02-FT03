import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function LayoutNavbar() {
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
            <Link to={"/user/add"}>
              <Button variant='outline-success'>Add User</Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LayoutNavbar;