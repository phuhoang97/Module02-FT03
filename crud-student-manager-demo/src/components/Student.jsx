import React from "react";

function Student(props) {
  console.log(props);
  // Bước 6: Sử dụng Destructing để phân tách các thuộc tính
  const { keyStudent, studentInfor } = props;

  const handleUpdateStudent = (element) => {
    props.handleUpdate(element, true, "UPDATE");
  };

  return (
    <tr key={keyStudent}>
      <td>{keyStudent + 1}</td>
      <td>{studentInfor.studentId}</td>
      <td>{studentInfor.studentName}</td>
      <td>{studentInfor.age}</td>
      <td>{studentInfor.gender ? "Nam" : "Nữ"}</td>
      <td>
        <div className='template-demo'>
          <button type='button' className='btn btn-danger btn-icon-text'>
            Xem
          </button>
          <button
            type='button'
            className='btn btn-warning btn-icon-text'
            onClick={() => handleUpdateStudent(studentInfor)}
          >
            Sửa
          </button>
          <button type='button' className='btn btn-success btn-icon-text'>
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
