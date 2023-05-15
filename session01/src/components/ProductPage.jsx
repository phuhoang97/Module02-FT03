import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

export default class ProductPage extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <div>Nội dung của Product Page</div>
        <FooterPage />
      </div>
    );
  }
}
