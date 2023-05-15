import React, { Component } from "react";

export default class ItemProduct extends Component {
  render() {
    return (
      <div>
        <a href=''>
          <div className='product_box'>
            <div className='product_img-box'>
              <img src='images/p1.png' alt='' />
              <span> Sale </span>
            </div>
            <div className='product_detail-box'>
              <span> $120.00 </span>
              <p>Passage of Lorem Ipsum, you</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
