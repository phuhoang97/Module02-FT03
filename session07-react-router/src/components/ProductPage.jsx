import React from "react";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  // useNavigate là 1 hook trong react-router-dom
  const navigate = useNavigate();

  return (
    <div>
      {/* useNavigate dùng để điều hướng trang */}
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
      {/* useNavigate với History */}
      <button onClick={() => navigate(-2)}>Go to Bách Bách</button>
      <button onClick={() => navigate(-1)}>Go to Bách</button>
      <button onClick={() => navigate(1)}>Go to Tiến</button>
      <button onClick={() => navigate(2)}>Go to Tiến Tiến</button>
      {/* useNavigate với replace */}
      {/* 
        Khi sử dụng useNavigate với replace sẽ giống với khi điều hướng trang nhưng
        Nếu replace = true thì sẽ không lưu lại history
      */}
      <button onClick={() => navigate("/contact", { replace: true })}>
        Go to Contact
      </button>
      {/* useNavigate để chuyển dữ liệu */}
      <button
        onClick={() =>
          navigate("/contact", {
            state: {
              count: 10,
            },
          })
        }
      >
        Go to Contact with data
      </button>
    </div>
  );
}

export default ProductPage;
