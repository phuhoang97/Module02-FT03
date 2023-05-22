import React from "react";
import { useParams } from "react-router-dom";

function CourseTypeId() {
  const param = useParams();
  return (
    <div>
      <h2>Chi tiết khóa học</h2>
      <p>
        Khóa học có Id: {param.id} - Có type là: {param.type}
      </p>
    </div>
  );
}

export default CourseTypeId;
