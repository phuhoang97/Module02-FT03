import React, { Component } from "react";
import ChilComp from "./ChilComp";
// import FunComp from "./FunComp";

export default class DemoProps extends Component {
  // Props là viết tắt của properties
  // Props là đối tượng dùng để lưu trữ các attribute
  // Props có giá trị không thay đổi
  // và dùng để giao tiếp giữa các component với nhau (Ví dụ Truyền cha xuống con)
  render() {
    const title = "Rikkei Academy";
    return (
      <div>
        <ChilComp age={10} titleParent={title}>
          Hello World
        </ChilComp>
        {/* <FunComp name={"Híu cà mau"} /> */}
      </div>
    );
  }
}
