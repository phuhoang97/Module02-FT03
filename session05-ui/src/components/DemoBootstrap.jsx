import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import CardProducts from "./CardProducts";

function DemoBootstrap() {
  return (
    <div>
      {/* Đây là navbar */}
      <Navbar bg='light-navbar' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Context</Nav.Link>
              <Nav.Link href='#link'>Product</Nav.Link>
              <Nav.Link href='#link'>About</Nav.Link>
            </Nav>
            <Button variant='outline-primary'>Add Product</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Đây là carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://hacom.vn/media/lib/04-08-2020/pcgaming.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://hacom.vn/media/lib/04-08-2020/pcgaming.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://hacom.vn/media/lib/04-08-2020/pcgaming.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Card component */}
      <div className='card-product'>
        <CardProducts
          img={
            "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-600x600.jpg"
          }
          title={"Iphone"}
          text={"Điện thoại Iphone"}
        />
        <CardProducts
          img={
            "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/flip4-1.jpeg"
          }
          title={"Samsung"}
          text={"Điện thoại Samsung"}
        />
        <CardProducts
          img={
            "https://cdn.tgdd.vn/Products/Images/42/301642/oppo-reno8t-vang1-thumb-600x600.jpg"
          }
          title={"Oppo"}
          text={"Điện thoại Oppo"}
        />
      </div>
    </div>
  );
}

export default DemoBootstrap;
