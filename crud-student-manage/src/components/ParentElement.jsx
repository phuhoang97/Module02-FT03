import React, { useEffect, useRef, useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentElement() {
  let indexUpdate = useRef();
  const [listStudent, setListStudent] = useState([
    { id: 1, nameStudent: "nguyen van a", age: 18, gender: "nam" },
    { id: 2, nameStudent: "nguyen van b", age: 19, gender: "nu" },
    { id: 3, nameStudent: "nguyen van c", age: 20, gender: "nam" },
  ]);

  const newStudent = (newStudent) => {
    setListStudent([...listStudent, newStudent]);
  };

  const [isForm, setIsForm] = useState(false);
  const [oldInfo, setOldInfo] = useState();

  function handleEdit(index) {
    setIsForm(true);
    setOldInfo({
      id: listStudent[index].id,
      nameStudent: listStudent[index].nameStudent,
      age: listStudent[index].age,
      gender: listStudent[index].gender,
    });
    indexUpdate.current = index;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setOldInfo({ [name]: value });
  }

  function handleFinishUpdate(e) {
    e.preventDefault();
    const newList = [...listStudent];
    newList[indexUpdate.current] = {
      ...listStudent[indexUpdate.current],
      ...oldInfo,
    };

    setListStudent(newList);
    setIsForm(false);
  }

  const handleDeleteStudent = (stId) => {
    const newDeleteStudent = listStudent.filter((item) => item.id !== stId);
    setListStudent(newDeleteStudent);
  };

  return (
    <div className='row'>
      <div className='col-lg-7 grid-margin stretch-card'>
        <div className='card'>
          {/* START CONTROL */}
          <Control />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          <div className='card-body'>
            <h3 className='card-title'>Danh sách sinh viên</h3>
            <div className='table-responsive pt-3'>
              <ListStudent
                newStudent={listStudent}
                isEdit={handleEdit}
                deleteProps={handleDeleteStudent}
              />
            </div>
          </div>
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      <div className='col-5 grid-margin'>
        <div className='card'>
          <div className='card-body'>
            <h3 className='card-title'>Thông tin sinh viên</h3>
            <Form
              newStudent={newStudent}
              checkForm={isForm}
              info={oldInfo}
              handleUpdate={handleFinishUpdate}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default ParentElement;
