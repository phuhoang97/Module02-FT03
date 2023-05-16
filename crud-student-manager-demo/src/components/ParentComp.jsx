import React, { useState } from "react";
import ListStudent from "./ListStudent";
import Control from "./Control";
import Form from "./Form";

function ParentComp() {
  // Bước 1: Tạo state lưu trữ thông tin sinh viên
  const [students, setStudents] = useState([
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn A",
      age: 20,
      gender: true,
      birthDate: "2003-04-15",
      birthPlace: "HN",
      address: "Số 1 Phạm Hùng",
    },
    {
      studentId: "SV002",
      studentName: "Nguyễn Thị B",
      age: 22,
      gender: false,
      birthDate: "2001-09-09",
      birthPlace: "ĐN",
      address: "Số 1 Trần Duy Hưng",
    },
    {
      studentId: "SV003",
      studentName: "Nguyễn Văn C",
      age: 18,
      gender: true,
      birthDate: "2005-11-22",
      birthPlace: "HCM",
      address: "22 Lý Tự Trọng",
    },
  ]);

  // Bước 2: Truyền hàm xuống component Control
  const [actionName, setActionName] = useState("ADD");

  //   const handleActionAdd = (action) => {
  //     setActionName(action);
  //   };

  // Create - C: Thêm Sinh viên
  // C-1: Tạo state bật tắt toggle
  const [toggle, setToggle] = useState(false);
  // C-2: Sử dụng hàm handleActionAdd được xây dựng ở Bước 2
  const handleActionAdd = (toggle, action) => {
    setToggle(toggle);
    setActionName(action);
  };

  // C-4: Truyền dữ liệu xuống Form để set các giá trị
  const handleSubmitAdd = (newStudent, toggle) => {
    setStudents([...students, newStudent]);
    setToggle(toggle);
  };

  

  return (
    <div>
      <div className='row'>
        <div className='col-lg-7 grid-margin stretch-card'>
          <div className='card'>
            {/* START CONTROL */}
            {/* Bước 3: Truyền hàm handleActionAdd xuống component Control */}
            <Control toggle={toggle} propsAction={handleActionAdd} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            {/* Bước 4: Truyền dữ liệu students (là state khai báo ở trên) xuống cho listStudent */}
            <ListStudent listStutentProps={students} />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <div className='col-5 grid-margin'>
          <div className='card'>
            <div className='card-body'>
              <h3 className='card-title'>Thông tin sinh viên</h3>
              {toggle ? (
                <Form
                  actionName={actionName}
                  handleSubmitAdd={handleSubmitAdd}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default ParentComp;
