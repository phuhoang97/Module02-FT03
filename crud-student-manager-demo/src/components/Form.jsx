import React, { useEffect, useState } from "react";

function Form({
  actionName,
  handleSubmitAdd,
  handleSubmitUpdate,
  selectStudent,
}) {
  console.log(actionName);
  // C-5 Sử dụng Des gọi dữ liệu từ Parent xuống
  // Khai báo state dùng để lưu trữ các dữ liệu input
  // Gắn các thuộc tính vào thẻ input
  // Viết hàm handleChangeInput
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    age: 0,
    gender: false,
    birthDate: "",
    birthPlace: "",
    address: "",
  });

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    handleSubmitAdd(formData, false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    handleSubmitUpdate(formData, false);
  };

  useEffect(() => {
    setFormData(selectStudent);
  }, [selectStudent]);

  console.log(selectStudent);
  return (
    <div>
      {/* cắt từ đây */}
      <form className='form-sample'>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Mã sinh viên</label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control'
              value={formData.studentId}
              name='studentId'
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Tên sinh viên</label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control'
              value={formData.studentName}
              name='studentName'
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Tuổi</label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control'
              value={formData.age}
              name='age'
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Giới tính</label>
          <div className='col-sm-9'>
            <select
              className='form-control'
              value={formData.gender}
              name='gender'
              onChange={handleChangeInput}
            >
              <option value={true}>Nam</option>
              <option value={false}>Nữ</option>
            </select>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Ngày sinh</label>
          <div className='col-sm-9'>
            <input
              className='form-control'
              placeholder='dd/mm/yyyy'
              value={formData.birthDate}
              name='birthDate'
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Nơi sinh</label>
          <div className='col-sm-9'>
            <select
              className='form-control'
              value={formData.birthPlace}
              name='birthPlace'
              onChange={handleChangeInput}
            >
              <option value={"HN"}>Hà Nội</option>
              <option value={"HCM"}>TP. Hồ Chí Minh</option>
              <option value={"DN"}>Đà Nẵng</option>
              <option value={"QN"}>Quảng Ninh</option>
            </select>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Địa chỉ</label>
          <div className='col-sm-9'>
            <textarea
              className='form-control'
              value={formData.address}
              name='address'
              onChange={handleChangeInput}
            />
          </div>
        </div>
        {actionName == "ADD" ? (
          <button
            type='submit'
            className='btn btn-primary me-2'
            onClick={handleAddStudent}
          >
            Submit
          </button>
        ) : (
          <button
            type='submit'
            className='btn btn-primary me-2'
            onClick={handleUpdate}
          >
            Update
          </button>
        )}
      </form>

      {/* cắt đến đây */}
    </div>
  );
}

export default Form;
