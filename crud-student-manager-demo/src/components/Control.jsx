import React from "react";

function Control({ toggle, propsAction }) {
  // C-3 - Nhận dữ liệu từ component control gửi lên lại Parent
  // Khi click vào button Thêm mới
  // => Sẽ gửi lên Parent 1 trạng thái true/false và 1 actionName tương ứng
  const handleToggleAdd = () => {
    propsAction(!toggle, "ADD");
  };
  return (
    <div>
      <div className='card-header'>
        <div className='row'>
          <div className='col-3'>
            <button
              type='button'
              className='btn btn-primary btn-icon-text'
              onClick={handleToggleAdd}
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className='col-6'>
            <form className='search-form' action='#'>
              <i className='icon-search' />
              <input
                type='search'
                className='form-control'
                placeholder='Search Here'
                title='Search here'
              />
              <button className='btn btn-primary btn-icon-text'>
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className='col-3 d-flex align-items-center'>
            <select className='form-control'>
              <option value=''>Sắp xếp</option>
              <option value=''>ABC def</option>
              <option value=''>ABC def</option>
              <option value=''>ABC def</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control;
