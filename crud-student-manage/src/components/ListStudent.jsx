import React from "react";

function ListStudent({ newStudent, isEdit, deleteProps }) {
  // const handleClickxem =(e)=>(
  // console.log(isEdit);

  // )
  function handleDelete(stId) {
    deleteProps(stId);
  }
  return (
    <div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {newStudent.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.id}</td>
              <td>{e.nameStudent}</td>
              <td>{e.age}</td>
              <td>{e.gender}</td>
              <td>
                <div className='template-demo'>
                  <button
                    type='button'
                    className='btn btn-danger btn-icon-text'
                  >
                    Xem
                  </button>
                  <button
                    type='button'
                    className='btn btn-warning btn-icon-text'
                    onClick={() => isEdit(i)}
                  >
                    Sửa
                  </button>
                  <button
                    type='button'
                    className='btn btn-success btn-icon-text'
                    onClick={() => handleDelete(e.id)}
                  >
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListStudent;
