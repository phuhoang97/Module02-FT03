import React from "react";

function Form({ newStudent, checkForm, info, handleUpdate, handleChange }) {
  const gender1 = ["Nam", "Nữ"];

  const addStudent = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const nameStudent = e.target.nameStudent.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    newStudent({ id: id, nameStudent: nameStudent, age: age, gender: gender });
  };
  return (
    <div>
      {!checkForm ? (
        <form onSubmit={addStudent} className='form-sample'>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Mã sinh viên</label>
            <div className='col-sm-9'>
              <input type='text' className='form-control' name='id' />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Tên sinh viên</label>
            <div className='col-sm-9'>
              <input type='text' className='form-control' name='nameStudent' />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Tuổi</label>
            <div className='col-sm-9'>
              <input type='text' className='form-control' name='age' />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Giới tính</label>
            <div className='col-sm-9'>
              <select name='gender' className='form-control'>
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Ngày sinh</label>
            <div className='col-sm-9'>
              <input
                name='ngaysinh'
                className='form-control'
                placeholder='dd/mm/yyyy'
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Nơi sinh</label>
            <div className='col-sm-9'>
              <select className='form-control'>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Quảng Ninh</option>
              </select>
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Địa chỉ</label>
            <div className='col-sm-9'>
              <textarea className='form-control' defaultValue={""} />
            </div>
          </div>
          <button type='submit' className='btn btn-primary me-2'>
            Submit
          </button>
        </form>
      ) : (
        <form onSubmit={handleUpdate} className='form-sample'>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Mã sinh viên</label>
            <div className='col-sm-9'>
              <input
                type='text'
                className='form-control'
                value={info.id}
                name='id'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Tên sinh viên</label>
            <div className='col-sm-9'>
              <input
                type='text'
                className='form-control'
                value={info.nameStudent}
                name='nameStudent'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Tuổi</label>
            <div className='col-sm-9'>
              <input
                type='text'
                className='form-control'
                value={info.age}
                name='age'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Giới tính</label>
            <div className='col-sm-9'>
              <select
                name='gender'
                className='form-control'
                onChange={handleChange}
              >
                {info.gender === "nam" ? (
                  <>
                    <option selected>Nam</option>
                    <option value='nữ'>Nữ</option>
                  </>
                ) : (
                  <>
                    <option value='nam'>Nam</option>
                    <option selected>Nữ</option>
                  </>
                )}
              </select>
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Ngày sinh</label>
            <div className='col-sm-9'>
              <input
                name='ngaysinh'
                className='form-control'
                placeholder='dd/mm/yyyy'
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Nơi sinh</label>
            <div className='col-sm-9'>
              <select className='form-control'>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Quảng Ninh</option>
              </select>
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label'>Địa chỉ</label>
            <div className='col-sm-9'>
              <textarea className='form-control' defaultValue={""} />
            </div>
          </div>
          <button type='submit' className='btn btn-primary me-2'>
            Update
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
