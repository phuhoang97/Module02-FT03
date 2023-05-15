// rcc

import React, { Component } from "react";
import "./DemoJSX.css";

//  Trong JSX thì class => className
// và attribute sẽ được viết theo dạng camelCase

export default class DemoJSX extends Component {
  render() {
    const people = "Back Back Back";
    const objUser = {
      id: 10,
      name: "Bach Cop",
      age: 18,
      title: "Bach dep trai vll",
      img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/6/30/816260/Cho-1.jpg",
    };
    return (
      <div>
        <h2>Demo JSX</h2>
        <div>Tên sinh viên là: {people}</div>
        <div>Thông tin user là:</div>
        {/* background-color => backgroundColor */}
        {/* Trong JSX các sự kiện sẽ được viết theo camelCase ví dụ: onclick => onClick */}

        <div
          style={{ backgroundColor: "gray", color: "yellow" }}
          className='information'
        >
          id: {objUser.id} - name: {objUser.name} - age: {objUser.age} - title:
          {objUser.title}
        </div>
        <form>
          <label htmlFor='name' style={{ color: "red" }}>
            Name:
          </label>
          <input type='text' />
        </form>
        <img src={objUser.img} alt='photo' />
      </div>
    );
  }
}
