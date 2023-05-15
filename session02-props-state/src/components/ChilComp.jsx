import React, { Component } from "react";

export default class ChilComp extends Component {
  // State là một đối tượng được dùng để lưu trữ giá trị trong component
  // Giá trị của state có thể thay đổi
  // Để khai báo state trong class component => constructor
  // constructor dùng để khai báo lớp và khởi tạo state
  // super là 1 hàm có sẵn dùng để gọi lớp vừa khởi tạo
  constructor() {
    super();
    // Khai báo state
    this.state = {
      studentA: "Hiếu Cà Mau",
      studentB: "Bình Vàng",
      answer: "Có",
      display: true,
    };
    // this.handleToggleDisplay = this.handleToggleDisplay.bind(this);
    this.handleClick03 = this.handleClick03.bind(this);
  }
  // Để thay đổi được state => setState
  handleChangeState = () => {
    this.setState({
      answer: "Khônggggggg",
    });
  };

  handleToggleDisplay = () => {
    this.setState({ display: !this.state.display });
  };

  // Cách đặt tên trong lập trình
  // Khi mà xử lý 1 việc gì đấy: handle
  // Khi xử lý 1 sự kiện: on

  handleClick01 = (event) => {
    console.log("Đây là click 01", event);
  };
  handleClick02 = (event) => {
    console.log("Đây là click 02", event);
  };
  handleClick03() {
    console.log(this.props.titleParent);
  }
  handleClick04() {
    console.log(this.props.titleParent);
  }

  render() {
    return (
      <div>
        <h2>Xử lý sự kiện với button</h2>
        {/* Cách 1 là gọi hàm khi render */}
        <button onClick={this.handleClick01("Hello 01")}>Click 01</button>
        {/* Cách 2 gọi hàm với arrow function */}
        <button onClick={() => this.handleClick02("hello 02")}>Click 02</button>
        <button onClick={this.handleClick03}>Click 03</button>
        <button onClick={() => this.handleClick04()}>Click 04</button>

        <div>
          Công ty là: {this.props.titleParent} - Số tuổi: {this.props.age} -
          Title: {this.props.children}
        </div>

        <h3>Sử dụng state</h3>
        <div>{this.state.studentA} có đẹp trai không?</div>
        <div>Câu trả lời: {this.state.answer}</div>
        <button onClick={this.handleChangeState}>Click Me !!!</button>

        <h2>Chào mừng bạn đến với thế giới của tôi</h2>
        {/* Sử dụng toán tử 3 ngôi 

        if(dieu kien) {
            logic 1
        } else {
            logic 2
        }
        dieu kien ? logic 1 : logic 2
        */}

        {this.state.display ? (
          <div>
            <p>Chúc các học tập tốt</p>
            <button onClick={this.handleToggleDisplay}>Show less</button>
          </div>
        ) : (
          <button onClick={this.handleToggleDisplay}>Read more</button>
        )}
      </div>
    );
  }
}
